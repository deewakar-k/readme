"use client";

import { useSectionStore } from "@/store/section.store";

export const DialogBody = () => {
  const { activeSection } = useSectionStore();

  return (
    <div className="flex-1 pl-8">
      <h1 className="mb-4 text-lg font-semibold">Content of {activeSection}</h1>
    </div>
  );
};
