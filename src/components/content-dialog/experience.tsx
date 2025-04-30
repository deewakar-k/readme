import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createExperience } from "@/actions/experience";
import { useExperience } from "@/hooks/use-experience";
import { Experience } from "@/types";

import { Add } from "../add-more";
import Content from "../content";
import { Empty } from "../empty";
import { Error } from "../error";
import { GoBack } from "../go-back";
import { InputBox } from "../input-box";
import { Loader } from "../loader";
import { CustomTextArea } from "../text-area";
import { Button } from "../ui/button";
//import { ImageUpload } from "../upload";
import { YearSelector } from "../year-selector";

export const WorkContent = () => {
  const [add, setAdd] = useState(false);
  const { data: works = [], isLoading, error, mutate } = useExperience();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isDirty },
  } = useForm<Experience>();

  const onSubmit = async (data: Experience) => {
    try {
      const newExperience = await createExperience(data);
      if (newExperience) {
        mutate(
          async (currentExperience) => {
            return [...(currentExperience || []), newExperience];
          },
          { revalidate: false }
        );
      }
      setAdd(false);
    } catch (error) {
      console.error("failed to create experience: ", error);
      toast.error("failed to create experience");
    }
  };

  if (isLoading) return <Loader />;

  if (error) return <Error label="experience" />;

  return (
    <div className="flex flex-col gap-3">
      {add ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <InputBox
              label="oranization"
              placeholder="Netflix"
              {...register("organization")}
            />
            <YearSelector
              label="from"
              onChange={(year) => {
                setValue("from", year, { shouldDirty: true });
              }}
            />
            <YearSelector
              label="to"
              onChange={(year) => {
                setValue("to", year, { shouldDirty: true });
              }}
            />
          </div>

          <div className="flex items-center gap-2">
            <InputBox
              label="link"
              placeholder="www.netflix.com"
              {...register("url")}
            />

            <InputBox
              label="location"
              placeholder="sf, etc"
              {...register("location")}
            />
          </div>
          <InputBox label="role" placeholder="swe" {...register("role")} />
          <CustomTextArea
            label="description"
            placeholder="worked on security..."
            {...register("description")}
          />

          <div className="fixed right-8 bottom-2 flex items-center gap-3">
            <GoBack handleOnClick={() => setAdd(false)} />

            <Button type="submit" disabled={isSubmitting || !isDirty}>
              {isSubmitting ? <Loader /> : ""}
              Save
            </Button>
          </div>
        </form>
      ) : (
        <>
          {works?.length === 0 ? (
            <Empty label="experience" />
          ) : (
            <>
              {works?.map((work, idx) => (
                <Content
                  from={work.from || ""}
                  to={work.to || ""}
                  title={work.organization}
                  role={work.role || ""}
                  location={work.location || ""}
                  description={work.description || ""}
                  url={work.url || ""}
                  showAction={true}
                  key={idx}
                />
              ))}
            </>
          )}
        </>
      )}
      <div className="fixed right-4 bottom-4">
        {add ? "" : <Add handleOnClick={() => setAdd(true)} />}
      </div>
    </div>
  );
};
