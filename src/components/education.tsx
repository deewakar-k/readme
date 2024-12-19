import { useEducations } from "@/queries/education";
import { useShowInputStore } from "@/store/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { EducationInput } from "./education-input";

export const Education = () => {
  const { showInput, setShowInput } = useShowInputStore();
  const { data: educations, isLoading } = useEducations();

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (!educations?.result) {
    return <div>cannot get your educations</div>;
  }

  const showCreateButton =
    !showInput && (!educations || educations.result.length === 0);
  const showAddButton =
    !showInput && educations && educations.result.length > 0;

  return (
    <section className="flex flex-col gap-4 ml-4 mr-8 h-full">
      {!showInput ? (
        <>
          {educations.result?.length > 0 ? (
            <div>
              {educations.result?.map((project) => (
                <pre key={project.id} className="text-xs">
                  {JSON.stringify(project, null, 2)}
                </pre>
              ))}
            </div>
          ) : (
            <div>god?</div>
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
        <EducationInput onBackAction={() => setShowInput(false)} />
      )}
    </section>
  );
};
