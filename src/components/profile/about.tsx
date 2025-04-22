import { getUser } from "@/actions/user";

import { AnimatedAbout } from "../animated/about";
import { Error } from "../error";

export const About = async () => {
  const user = await getUser();

  if (!user) {
    return <Error label="user" />;
  }
  return <AnimatedAbout user={user} />;
};
