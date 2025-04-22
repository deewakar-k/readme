import { getExperience } from "@/actions/experience";

import { AnimatedWork } from "../animated/work";
import { Error } from "../error";

export const WorkExperience = async () => {
  const works = await getExperience();
  if (!works) {
    return <Error label="work" />;
  }
  return <AnimatedWork works={works} />;
};
