import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { createProject } from "@/actions/projects";
import { useProjects } from "@/hooks/use-projects";
import { Project, ProjectFormData } from "@/types";

import { Add } from "../add-more";
import Content from "../content";
import { Empty } from "../empty";
import { Error } from "../error";
import { GoBack } from "../go-back";
import { InputBox } from "../input-box";
import { Loader } from "../loader";
import { CustomTextArea } from "../text-area";
import { Button } from "../ui/button";
import { ImageUpload } from "../upload";
import { YearSelector } from "../year-selector";

export const ProjectContent = () => {
  const [add, setAdd] = useState(false);
  const { data: projects = [], isLoading, error, mutate } = useProjects();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { isSubmitting, isDirty },
  } = useForm<ProjectFormData>();

  const uploadImages = async (files: File[]): Promise<string[]> => {
    if (!files || files.length === 0) return [];

    const uploadedUrls: string[] = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/files", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const url = await response.json();
        uploadedUrls.push(url);
      } else {
        toast.error("failed to upload image");
      }
    }

    return uploadedUrls;
  };

  const onSubmit = async (data: ProjectFormData) => {
    try {
      const fileUrls = await uploadImages(data.attachments);

      const projectData: Project = {
        ...data,
        attachments: JSON.stringify(fileUrls),
      };
      const newProject = await createProject(projectData);

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
            {...register("description")}
          />

          <Controller
            name="attachments"
            control={control}
            render={({ field }) => (
              <ImageUpload onChange={field.onChange} value={field.value} />
            )}
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
