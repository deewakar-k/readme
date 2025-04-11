import { LoaderIcon } from "lucide-react";

export const Loader = () => {
  return (
    <div className="flex h-full animate-spin items-center justify-center">
      <LoaderIcon className="text-muted-foreground size-4" />
    </div>
  );
};
