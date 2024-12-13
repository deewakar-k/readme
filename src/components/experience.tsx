import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";

export const ExperienceInput = () => {
  return (
    <section className="flex flex-col gap-4 ml-4 mr-8">
      <section className="flex items-center gap-4">
        <LabelInput label="title" placeholder="youtuber" />
        <LabelInput label="company" placeholder="org" />
      </section>

      <section className="flex items-center gap-4">
        <LabelInput label="location" placeholder="location" />
        <LabelInput label="url" placeholder="openai.com" />
      </section>

      <section>
        <LabelTextArea
          label="description"
          placeholder="few words about your company..."
        />
      </section>
    </section>
  );
};
