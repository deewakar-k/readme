import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { createProject } from "@/actions/projects";
import { useProjects } from "@/hooks/use-projects";
import { Project } from "@/types";

import { Add } from "../add-more";
import Content from "../content";
import { Empty } from "../empty";
import { Error } from "../error";
import { InputBox } from "../input-box";
import { Loader } from "../loader";
import { CustomTextArea } from "../text-area";
import { Button } from "../ui/button";
import { YearSelector } from "../year-selector";

export const ProjectContent = () => {
  const [add, setAdd] = useState(false);
  const { data: projects = [], isLoading, error, mutate } = useProjects();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isDirty },
  } = useForm<Project>();

  const onSubmit = async (data: Project) => {
    try {
      const newProject = await createProject(data);

      if (newProject) {
        mutate(
          async (currentProject) => {
            return [...(currentProject || []), newProject];
          },
          { revalidate: false }
        );
      }
      setAdd(false);
    } catch (error) {
      console.error("error creating project: ", error);
      toast.error("error creating project");
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <Error label="projects" />;

  return (
    <div className="flex flex-col gap-3">
      {add ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <InputBox label="name" placeholder="readme" {...register("name")} />
            <YearSelector
              label="date"
              showOngoing={true}
              onChange={(year) => {
                setValue("date", year, { shouldDirty: true });
              }}
            />
          </div>
          <InputBox
            label="link"
            placeholder="http://localhost:3000"
            {...register("url")}
          />
          <CustomTextArea
            label="description"
            placeholder="best project ever built using nextjs..."
            className="min-h-48"
            {...register("description")}
          />

          <Button
            type="submit"
            className="fixed right-8 bottom-2"
            disabled={isSubmitting || !isDirty}
          >
            {isSubmitting ? <Loader /> : ""}
            Done
          </Button>
        </form>
      ) : (
        <>
          {projects && projects.length === 0 ? (
            <Empty label="projects" />
          ) : (
            <>
              {projects.map((project, idx) => (
                <Content
                  header={project.date || ""}
                  title={project.name}
                  url={project.url || ""}
                  description={project.description || ""}
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
