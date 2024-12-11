import Image from "next/image";
import { Button } from "./ui/button";
import React from "react";
import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

export const GoogleButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn("google", {
            redirectTo: "/setup",
          });
        } catch (error) {
          if (error instanceof AuthError) {
            return console.error("error singing in: ", error);
          }

          throw error;
        }
      }}
    >
      <Button variant={"outline"} className="rounded-xl w-full">
        <Image src={"/google.svg"} alt="google" width={18} height={18} />
        continue with google
      </Button>
    </form>
  );
};
