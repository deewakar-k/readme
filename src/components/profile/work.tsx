import { getExperience } from "@/actions/experience";

import { AnimatedWork } from "../animated/work";
import { Error } from "../error";

export const WorkExperience = async ({ userId }: { userId: string }) => {
  const works = await getExperience(userId);
  if (!works) {
    return <Error label="work" />;
  }
  return <AnimatedWork works={works} />;
};
