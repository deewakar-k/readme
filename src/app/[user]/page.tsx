import { checkUsername } from "@/actions/user";
import { auth } from "../auth";
import { UsernameDialog } from "@/components/username-dialog";
import { notFound, redirect } from "next/navigation";
import { ActionFooter } from "@/components/action-footer";

export default async function Page({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  const { user: username } = await params;
  console.log("Current route username:", username);

  const exists = await checkUsername(username);
  console.log("Username exists:", exists);

  if (!exists) {
    return notFound();
  }

  if (session?.user && !session.user.username) {
    return <UsernameDialog />;
  }

  return (
    <main className="flex flex-col min-h-screen p-4">
      <div className="flex-grow">hi {username}</div>
      <div className="flex items-center gap-2">
        <ActionFooter />
      </div>
    </main>
  );
}
