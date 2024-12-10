import { checkUsername } from "@/actions/user";
import { auth } from "../auth";
import { UsernameDialog } from "@/components/username-dialog";

export default async function Page({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const session = await auth();
  const username = (await params).user;
  const exists = await checkUsername(username);

  if (!exists && session?.user) {
    return <UsernameDialog />;
  }

  if (!exists) {
    return <b>user not found</b>;
  }

  return <h1>hi {username}</h1>;
}
