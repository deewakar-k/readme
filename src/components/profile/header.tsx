import Image from "next/image";

import { getUser } from "@/actions/user";

import { Avatar, AvatarFallback } from "../ui/avatar";

export const Header = async () => {
  const user = await getUser();

  return (
    <div className="flex items-start justify-start">
      <div className="flex items-center gap-6">
        <div>
          <Avatar className="h-[92px] w-[92px]">
            <Image
              src={user?.image || ""}
              alt={user?.name || ""}
              width={"92"}
              height={"92"}
            />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="text-xl">{user?.name}</h1>
          <p className="text-muted-foreground text-sm">{user?.bio}</p>
        </div>
      </div>
    </div>
  );
};
