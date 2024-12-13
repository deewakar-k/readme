import { HardDriveDownload, UserPen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const sections = [
  { label: "profile" },
  { label: "projects" },
  { label: "experience" },
  { label: "education" },
  { label: "certification" },
  { label: "contact" },
];

export const ActionFooter = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full shadow-sm shadow-black">
            <UserPen /> edit profile
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
          <div className="flex h-full">
            <DialogHeader className="border-r pr-4">
              <nav>
                {sections.map((section, index) => (
                  <DialogTitle
                    key={index}
                    className="mb-2 cursor-pointer rounded-md p-2 text-sm font-normal hover:bg-zinc-100"
                  >
                    {section.label}
                  </DialogTitle>
                ))}
              </nav>
            </DialogHeader>
            <div className="flex-1 pl-8">
              <h1 className="mb-4 text-lg font-semibold">Content</h1>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Button size={"icon"} className="rounded-full shadow-black shadow-sm">
        <HardDriveDownload />
      </Button>
    </>
  );
};
