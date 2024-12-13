import { HardDriveDownload, UserPen } from "lucide-react";
import { Button } from "./ui/button";

export const ActionFooter = () => {
  return (
    <>
      <Button className="rounded-full shadow-sm shadow-black">
        <UserPen /> edit profile
      </Button>
      <Button size={"icon"} className="rounded-full shadow-black shadow-sm">
        <HardDriveDownload />
      </Button>
    </>
  );
};
