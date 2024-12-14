import { usePathname } from "next/navigation";
import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";
import { useUser } from "@/queries/user";
import Image from "next/image";

export const ProfileInput = () => {
  const pathname = usePathname();
  const username = pathname.split("/")[1];

  const { data: user, error } = useUser(username);

  if (error) {
    return <div>error loading user details</div>;
  }
  if (!user) return <div>no user data found</div>;

  return (
    <section className="flex flex-col gap-4 ml-4 mr-8">
      <div className="flex items-center justify-start gap-4">
        {user.image && (
          <div className="pt-4">
            <Image
              src={user.image}
              alt="user image"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        )}
        <LabelInput
          label="username"
          placeholder={"username"}
          value={username}
          className="w-full"
        />
      </div>
      <LabelInput
        label="display name"
        value={user?.name || ""}
        placeholder={"display name"}
      />
      <LabelInput label="what do you do?" placeholder={"cook"} />
      <LabelInput label="website" placeholder={"your pretty website"} />
      <LabelTextArea
        label="about"
        placeholder="something cool about yourself..."
      />
    </section>
  );
};
