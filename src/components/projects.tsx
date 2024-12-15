"use client";

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useProjects } from "@/queries/project";
import { ProjectInput } from "./project-input";
import { useShowInputStore } from "@/store/input";

export const Projects = () => {
  const { showInput, setShowInput } = useShowInputStore();
  const { data: projects, isLoading, error } = useProjects();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!projects || error) {
    return <div>error fetching projects:(</div>;
  }

  const showCreateButton = !showInput && (!projects || projects.length === 0);
  const showAddButton = !showInput && projects && projects.length > 0;

  return (
    <section className="flex flex-col gap-4 ml-4 mr-8 h-full">
      {!showInput ? (
        <>
          {projects?.length > 0 ? (
            <div>
              {projects?.map((project) => (
                <pre key={project.id} className="text-xs">
                  {JSON.stringify(project, null, 2)}
                </pre>
              ))}
            </div>
          ) : (
            <div>create some projects dumb ass</div>
          )}
          {(showCreateButton || showAddButton) && (
            <div className="flex justify-end mt-auto">
              <Button
                className="rounded-full"
                size={"icon"}
                onClick={() => setShowInput(true)}
              >
                <Plus />
              </Button>
            </div>
          )}
        </>
      ) : (
        <ProjectInput onBackAction={() => setShowInput(false)} />
      )}
    </section>
  );
};
