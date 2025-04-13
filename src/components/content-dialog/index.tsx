"use client";

import { useState } from "react";

import { Briefcase, FolderKanban, Pencil, Phone, User } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { SidebarProvider } from "../ui/sidebar";
import { ContactsContent } from "./contacts";
import { WorkContent } from "./experience";
import Profile from "./profile";
import { ProjectContent } from "./projects";
import { ContentSidebar } from "./sidebar";

export const ContentDialog = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "contacts", label: "Contacts", icon: Phone },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <Profile />;
      case "projects":
        return <ProjectContent />;
      case "experience":
        return <WorkContent />;
      case "contacts":
        return <ContactsContent />;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} className="rounded-xl shadow-md">
          <Pencil />
          <span>Edit</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-h-[700px] overflow-hidden p-0 sm:max-w-[700px]">
        <div className="flex h-full">
          <DialogTitle></DialogTitle>
          <SidebarProvider>
            <ContentSidebar
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <div className="flex flex-1">
              <div className="w-full max-w-lg p-8">{renderContent()}</div>
            </div>
          </SidebarProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};
