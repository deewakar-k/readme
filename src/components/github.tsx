import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

export default async function GithubButton() {
  return (
    <form
      action={async () => {
        "use server";
        try {
          await signIn("github", {
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
      <Button type="submit" variant={"outline"} className="rounded-xl w-full">
        <GithubIcon width={18} height={18} />
        continue with github
      </Button>
    </form>
  );
}
