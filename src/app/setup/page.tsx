import { UsernameDialog } from "@/components/username-dialog";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function Setup() {
  const session = await auth();
  console.log("on setup: ", session?.user);

  if (session?.user.username) {
    redirect(`/${session.user.username}`);
  }
  return <UsernameDialog />;
}
