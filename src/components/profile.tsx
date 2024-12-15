import { usePathname } from "next/navigation";
import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";
import { useUpdateUser, useUser } from "@/queries/user";
import Image from "next/image";
import { Button } from "./ui/button";

export const ProfileInput = () => {
  const pathname = usePathname();
  const username = pathname.split("/")[1];

  const { data: user, error } = useUser(username);
  const updateUser = useUpdateUser(username);

  const handleSave = () => {
    if (user) {
      updateUser.mutate(user);
    }
  };

  if (error) {
    return <div>error loading user details</div>;
  }
  if (!user) return <div>no user data found</div>;

  return (
    <section className="flex flex-col gap-4 ml-4 mr-8 h-full">
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
          onChange={(e) => (user.username = e.target.value)}
          className="w-full"
        />
      </div>
      <LabelInput
        label="display name"
        value={user?.name || ""}
        onChange={(e) => (user.name = e.target.value)}
        placeholder={"display name"}
      />
      <LabelInput
        label="what do you do?"
        value={user.occupation || ""}
        onChange={(e) => (user.occupation = e.target.value)}
        placeholder={"cook"}
      />
      <LabelInput
        label="website"
        value={user.website || ""}
        onChange={(e) => (user.website = e.target.value)}
        placeholder={"your pretty website"}
      />
      <LabelTextArea
        value={user.bio || ""}
        onChange={(e) => (user.bio = e.target.value)}
        label="about"
        placeholder="something cool about yourself..."
      />

      <div className="mt-auto flex justify-end">
        <Button
          onClick={handleSave}
          variant={"link"}
          className="p-0 rounded-md"
        >
          save
        </Button>
      </div>
    </section>
  );
};
