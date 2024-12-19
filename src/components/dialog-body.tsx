"use client";

import { useSectionStore } from "@/store/section.store";
import { ProfileInput } from "./profile";
import { ExperienceInput } from "./experience";
import { CertificatesInput } from "./certificates";
import { ContactInput } from "./contact";
import { Projects } from "./projects";
import { Education } from "./education";

export const DialogBody = () => {
  const { activeSection } = useSectionStore();

  return (
    <div className="flex-1 pl-8">
      {activeSection === "profile" && <ProfileInput />}
      {activeSection === "projects" && <Projects />}
      {activeSection === "experience" && <ExperienceInput />}
      {activeSection === "education" && <Education />}
      {activeSection === "certification" && <CertificatesInput />}
      {activeSection === "contact" && <ContactInput />}
    </div>
  );
};
