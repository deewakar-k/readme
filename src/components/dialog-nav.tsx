"use client";

import { cn } from "@/lib/utils";
import { DialogTitle } from "./ui/dialog";
import { useSectionStore } from "@/store/section.store";

const sections = [
  { id: "profile", label: "profile" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "education", label: "education" },
  { id: "certification", label: "certification" },
  { id: "contact", label: "contact" },
];

export const DialogNav = () => {
  const { activeSection, setActiveSection } = useSectionStore();

  return (
    <nav>
      {sections.map((section) => (
        <DialogTitle
          key={section.id}
          onClick={() => setActiveSection(section.id)}
          className={cn(
            "mb-2 cursor-pointer rounded-md p-2 text-lg font-normal hover:bg-zinc-100",
            activeSection === section.id ? "bg-zinc-100" : "",
          )}
        >
          {section.label}
        </DialogTitle>
      ))}
    </nav>
  );
};
