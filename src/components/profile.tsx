import { usePathname } from "next/navigation";
import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";

export const ProfileInput = () => {
  const pathname = usePathname();
  const username = pathname.split("/")[1];

  return (
    <section className="flex flex-col gap-4 ml-4 mr-8">
      <LabelInput label="username" placeholder={"username"} value={username} />
      <LabelInput label="display name" placeholder={"display name"} />
      <LabelInput label="what do you do?" placeholder={"cook"} />
      <LabelInput label="website" placeholder={"your pretty website"} />
      <LabelTextArea
        label="about"
        placeholder="something cool about yourself..."
      />
    </section>
  );
};
