"use client";

import { toast } from "sonner";

import { signIn } from "@/lib/auth-client";

import { Icons } from "../icons";
import { Button } from "../ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

export const SignInModal = () => {
  const handleSignIn = async (provider: "google" | "github") => {
    toast.promise(
      signIn.social({
        provider: provider,
        callbackURL: "/readme",
      }),
      {
        loading: "redirecting...",
        success: "redirected successfully",
        error: "login redirect failed",
      }
    );
  };

  return (
    <DialogContent className="sm:max-w-[380px]">
      <DialogHeader className="leading-none font-medium">
        <DialogTitle>Welcome to readme 🌱</DialogTitle>
      </DialogHeader>
      <DialogDescription>
        By continuing you agree to our terms of service and privacy policy.
      </DialogDescription>
      <div className="flex flex-col gap-2">
        <Button onClick={() => handleSignIn("google")}>
          continue with{" "}
          <span>
            {" "}
            <Icons.google />{" "}
          </span>
        </Button>
        <Button onClick={() => handleSignIn("github")}>
          continue with{" "}
          <span>
            {" "}
            <Icons.gitHub />{" "}
          </span>
        </Button>
      </div>
    </DialogContent>
  );
};
