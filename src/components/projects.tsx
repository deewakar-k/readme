import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";

export const ProjectsInput = () => {
  return (
    <section className="flex flex-col gap-4 ml-4 mr-8">
      <LabelInput
        label="title"
        placeholder="name of your craft"
        className="flex items-center gap-2"
      />
      <LabelInput
        label="link"
        placeholder="crazy.io"
        className="flex items-center gap-2"
      />
      <LabelTextArea
        label="description"
        placeholder="few words about your craft..."
      />
    </section>
  );
};
