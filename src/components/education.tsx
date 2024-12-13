import { LabelInput } from "./label-input";
import { LabelTextArea } from "./label-textarea";

export const EducationInput = () => {
  return (
    <section className="flex flex-col gap-4 ml-4 mr-8">
      <section className="flex items-center gap-4">
        <LabelInput label="degree" placeholder="youtuber" />
        <LabelInput label="institution" placeholder="MIT" />
      </section>

      <section className="flex items-center gap-4">
        <LabelInput label="location" placeholder="location" />
        <LabelInput label="year" placeholder="2025" />
      </section>

      <section>
        <LabelTextArea
          label="description"
          placeholder="few words about your education..."
        />
      </section>
    </section>
  );
};
