"use client";

import { Button } from "@/components/ui/button";
import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";
import { YearSelect } from "./select-year";
import { useCreateProject } from "@/queries/project";
import { useState } from "react";
import { Project } from "@/types/project";
import { useShowInputStore } from "@/store/input";

interface ProjectInputProps {
  onBackAction: () => void;
}

export const ProjectInput = ({ onBackAction }: ProjectInputProps) => {
  const { setShowInput } = useShowInputStore();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  );
  const [description, setDescription] = useState("");

  const createProject = useCreateProject();

  const handleSave = () => {
    const data: Project = {
      title: title,
      link: link,
      year: selectedYear,
      description: description,
    };
    createProject.mutate(data);
    setShowInput(false);
  };

  return (
    <>
      <LabelInput
        label="title"
        value={title || ""}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="name of your craft"
        className="flex items-center gap-2"
      />
      <YearSelect value={selectedYear} onChange={setSelectedYear} />
      <LabelInput
        label="link"
        value={link || ""}
        onChange={(e) => setLink(e.target.value)}
        placeholder="crazy.io"
        className="flex items-center gap-2"
      />
      <LabelTextArea
        label="description"
        value={description || ""}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="few words about your craft..."
      />

      <div className="mt-auto flex justify-between w-full">
        <Button onClick={onBackAction} variant="link">
          back
        </Button>
        <Button onClick={handleSave} variant="link">
          save
        </Button>
      </div>
    </>
  );
};
