import { getUser } from "@/actions/user";

import { AnimatedHeader } from "../animated/header";
import { Error } from "../error";

export const Header = async () => {
  const user = await getUser();

  if (!user) {
    return <Error label="user" />;
  }

  return (
    <div>
      <AnimatedHeader user={user} />
    </div>
  );
};
