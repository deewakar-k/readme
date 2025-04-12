import { LucideIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";

type Section = {
  id: string;
  label: string;
  icon: LucideIcon;
};

interface SidebarProps {
  sections: Section[];
  setActiveSection: (id: string) => void;
  activeSection: string;
}

export const ContentSidebar = ({
  sections,
  setActiveSection,
  activeSection,
}: SidebarProps) => {
  return (
    <Sidebar collapsible="none" className="w-[200px] border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sections.map((section) => (
                <SidebarMenuItem key={section.id}>
                  <SidebarMenuButton
                    isActive={activeSection === section.id}
                    onClick={() => setActiveSection(section.id)}
                    className="cursor-pointer"
                  >
                    <section.icon className="mr-2 h-4 w-4" />
                    <span>{section.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
