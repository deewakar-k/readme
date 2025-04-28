import { useState } from "react";

import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  createProject,
  deleteProject,
  updateProject,
} from "@/actions/projects";
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
import { YearSelector } from "../year-selector";
import { ProjectAttachmentField } from "./project-attachment";

export const ProjectContent = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingContent, setEditingContent] = useState<ProjectFormData | null>(
    null
  );

  const { data: projects = [], isLoading, error, mutate } = useProjects();
  const {
    register,
    control,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { isSubmitting, isDirty },
  } = useForm<ProjectFormData>();

  const { existingAttachmentsUrls = [] } = watch();

  const handleAddClick = () => {
    setEditingContent(null);
    reset();
    setIsFormVisible(true);
  };

  const handleEdit = (project: Project) => {
    const existingUrls = project.attachments
      ? JSON.parse(project.attachments)
      : [];

    const formData = {
      id: project.id || "",
      name: project.name,
      description: project.description || "",
      url: project.url || "",
      date: project.date || null,
      attachments: [], // Start with no new files
      existingAttachmentUrls: existingUrls, // Store the URLs
    };

    setEditingContent(formData);
    reset(formData);
    setIsFormVisible(true);
  };

  const handleDelete = async (project: Project) => {
    try {
      if (!project.id) return;

      await deleteProject(project.id);
      toast.success("Project deleted successfully");
      mutate(
        (currentProjects) =>
          (currentProjects || []).filter((p) => p.id !== project.id),
        { revalidate: false }
      );
    } catch (err) {
      console.error("Error deleting project:", err);
      toast.error("Failed to delete project");
    }
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setEditingContent(null);
    reset();
  };

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

  const handleRemoveUrl = (urlToRemove) => {
    setValue(
      "existingAttachmentsUrls",
      existingAttachmentsUrls.filter((url) => url !== urlToRemove)
    );
  };

  const onSubmit = async (data: ProjectFormData) => {
    try {
      const newFileUrls =
        data.attachments.length > 0 ? await uploadImages(data.attachments) : [];

      const allAttachments = [
        ...(data.existingAttachmentsUrls || []),
        ...newFileUrls,
      ];

      const projectData: Project = {
        ...data,
        attachments:
          allAttachments.length > 0 ? JSON.stringify(allAttachments) : null,
      };

      if (editingContent && editingContent.id) {
        const updatedProject = await updateProject(
          projectData,
          editingContent.id
        );
        toast.success("Project updated successfully");
        mutate(
          (currentProjects) =>
            (currentProjects || []).map((p) =>
              p.id === editingContent.id ? { ...p, ...updatedProject } : p
            ),
          { revalidate: false }
        );
      } else {
        const newProject = await createProject(projectData);

        if (newProject) {
          mutate(
            async (currentProject) => {
              return [...(currentProject || []), newProject];
            },
            { revalidate: false }
          );
        }
      }
      handleCancel();
    } catch (error) {
      console.error("error creating project: ", error);
      toast.error("error creating project");
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <Error label="projects" />;

  return (
    <div className="flex flex-col gap-3">
      {isFormVisible ? (
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

          <ProjectAttachmentField
            control={control}
            existingUrls={existingAttachmentsUrls}
            onRemoveUrl={handleRemoveUrl}
          />

          <div className="fixed right-8 bottom-2 flex items-center gap-3">
            <GoBack handleOnClick={handleCancel} />

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
              {projects.map((project) => (
                <Content
                  id={project.id}
                  key={project.id}
                  header={project.date || ""}
                  title={project.name}
                  url={project.url || ""}
                  description={project.description || ""}
                  showAction={true}
                  onEditClick={() => handleEdit(project)}
                  onDeleteClick={() => handleDelete(project)}
                />
              ))}
            </>
          )}
        </>
      )}
      <div className="fixed right-4 bottom-4">
        {!isFormVisible && <Add handleOnClick={handleAddClick} />}
      </div>
    </div>
  );
};
