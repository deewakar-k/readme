"use client";

import { useSectionStore } from "@/store/section.store";
import { ProfileInput } from "./profile";
import { ProjectsInput } from "./projects";
import { ExperienceInput } from "./experience";
import { EducationInput } from "./education";
import { CertificatesInput } from "./certificates";
import { ContactInput } from "./contact";

export const DialogBody = () => {
  const { activeSection } = useSectionStore();

  return (
    <div className="flex-1 pl-8">
      {activeSection === "profile" && <ProfileInput />}
      {activeSection === "projects" && <ProjectsInput />}
      {activeSection === "experience" && <ExperienceInput />}
      {activeSection === "education" && <EducationInput />}
      {activeSection === "certification" && <CertificatesInput />}
      {activeSection === "contact" && <ContactInput />}
    </div>
  );
};
