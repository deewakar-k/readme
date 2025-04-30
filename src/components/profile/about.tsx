import { getUser } from "@/actions/user";

import { AnimatedAbout } from "../animated/about";
import { Error } from "../error";

export const About = async ({ userId }: { userId: string }) => {
  const user = await getUser(userId);

  if (!user) {
    return <Error label="user" />;
  }
  return <AnimatedAbout user={user} />;
};
