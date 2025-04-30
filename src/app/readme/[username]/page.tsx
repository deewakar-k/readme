import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { ContentDialog } from "@/components/content-dialog";
import { About } from "@/components/profile/about";
import { Contacts } from "@/components/profile/contact";
import { Header } from "@/components/profile/header";
import { Projects } from "@/components/profile/projects";
import { WorkExperience } from "@/components/profile/work";
import { db } from "@/db";
import { auth } from "@/lib/auth";

interface PageProps {
  params: Promise<{
    username: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { username } = await params;
  console.log("looking for: ", username);

  const userExist = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.username, username),
  });

  console.log("user found: ", userExist);

  if (!userExist) {
    notFound();
  }

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const isOwner = session && session.user.id === userExist.id;

  const userId = userExist.id;

  return (
    <div className="mx-auto mt-8 flex max-w-lg flex-col items-start justify-start gap-4">
      <Header userId={userId} />
      <About userId={userId} />
      <Projects userId={userId} />
      <WorkExperience userId={userId} />
      <Contacts userId={userId} />
      {isOwner && (
        <div className="fixed right-4 bottom-3">
          <ContentDialog />
        </div>
      )}
    </div>
  );
}
