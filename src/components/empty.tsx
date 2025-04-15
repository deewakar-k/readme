import Image from "next/image";

import { caveat } from "@/app/ui/fonts";

export const Empty = ({ label }: { label: string }) => {
  return (
    <div className="">
      <p
        className={`${caveat.className} fixed right-20 bottom-28 -rotate-[10deg] text-center text-2xl`}
      >
        your {label} seems empty, <br /> add some!
      </p>
      <Image
        src={"/arrow.svg"}
        width={130}
        height={130}
        alt="arrow"
        className="fixed right-6 bottom-4 -rotate-[55deg]"
      />
    </div>
  );
};
