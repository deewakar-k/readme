import { instrument_serif } from "@/app/ui/fonts";

export const Hero = () => {
  return (
    <div className="text-center">
      <h1 className={`${instrument_serif.className} text-6xl capitalize`}>
        {" "}
        unclutter your career story
      </h1>
      <p className="text-muted-foreground mx-auto max-w-sm font-light">
        Your story, elegantly told. Build a stunning, shareable resume that
        speaks for itself.
      </p>
    </div>
  );
};
