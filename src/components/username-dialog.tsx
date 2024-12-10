"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setUsername } from "@/actions/user";

export const UsernameDialog = () => {
  const { data: session } = useSession();
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleUsername = async () => {
    try {
      if (!session?.user.id) {
        return console.error("user not found");
      }

      await setUsername(session.user.id, value);
      router.push(`/${value}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog open={true}>
      <DialogContent className="space-y-2 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-medium">
            welcome to readme! 🌱
          </DialogTitle>
          <DialogDescription>
            please give yourself a unique username!
          </DialogDescription>
        </DialogHeader>
        <div>
          <label>username</label>
          <Input
            required
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="something cool"
          />
        </div>
        <DialogFooter>
          <Button onClick={handleUsername} className="rounded-md">
            continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
