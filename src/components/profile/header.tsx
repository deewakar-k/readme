import { getUser } from "@/actions/user";

import { AnimatedHeader } from "../animated/header";
import { Error } from "../error";

export const Header = async ({ userId }: { userId: string }) => {
  const user = await getUser(userId);

  if (!user) {
    return <Error label="user" />;
  }

  return (
    <div>
      <AnimatedHeader user={user} />
    </div>
  );
};
