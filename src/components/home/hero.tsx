import { instrument_serif } from "@/app/ui/fonts";

import { Particles } from "../magicui/particles";

export const Hero = () => {
  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        quantity={30}
        ease={80}
        color={"#fff"}
        refresh
      />
      <div className="flex flex-col gap-4 text-center">
        <h1 className={`${instrument_serif.className} text-6xl capitalize`}>
          {" "}
          unclutter your{" "}
          <span className="text-gray-400">career story</span>{" "}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-sm font-light">
          Your story, elegantly told. Build a stunning, shareable resume that
          speaks for itself.
        </p>
      </div>
    </>
  );
};
