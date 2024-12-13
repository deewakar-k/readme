import { LabelInput } from "./label-input";

export const ContactInput = () => {
  return (
    <section className="flex flex-col gap-4 ml-4 mr-8">
      <LabelInput
        label="title"
        placeholder="github"
        className="flex items-center gap-2"
      />
      <LabelInput
        label="link"
        placeholder="github.com"
        className="flex items-center gap-2"
      />
    </section>
  );
};
