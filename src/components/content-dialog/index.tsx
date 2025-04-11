"use client";

import { useState } from "react";

import {
  Briefcase,
  FolderKanban,
  Info,
  Pencil,
  Phone,
  User,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { SidebarProvider } from "../ui/sidebar";
import { ContentSidebar } from "./sidebar";

export const ContentDialog = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = [
    { id: "profile", label: "Profile", icon: User },
    { id: "about", label: "About", icon: Info },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "experience", label: "Work Experience", icon: Briefcase },
    { id: "contacts", label: "Contacts", icon: Phone },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <div>this is profile content</div>;
      case "about":
        return <div>this is about content</div>;
      case "projects":
        return <div>this is projects content</div>;
      case "experience":
        return <div>this is experience content</div>;
      case "contacts":
        return <div>this is contacts content</div>;
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full shadow-md"
        >
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-[80vh] max-h-[700px] overflow-hidden p-0 sm:max-w-[900px]">
        <div className="flex h-full overflow-hidden">
          <DialogTitle></DialogTitle>
          <SidebarProvider>
            <ContentSidebar
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
            <div className="flex-1 overflow-auto">{renderContent()}</div>
          </SidebarProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};
