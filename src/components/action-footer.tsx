"use client";

import { HardDriveDownload, UserPen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { DialogNav } from "./dialog-nav";
import { DialogBody } from "./dialog-body";

export default function ActionFooter() {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full shadow-sm shadow-black">
            <UserPen /> edit profile
          </Button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] md:max-w-[700px]"
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex h-full">
            <DialogHeader className="border-r pr-4">
              <DialogNav />
            </DialogHeader>
            <DialogBody />
          </div>
        </DialogContent>
      </Dialog>
      <Button size={"icon"} className="rounded-full shadow-black shadow-sm">
        <HardDriveDownload />
      </Button>
    </>
  );
}
