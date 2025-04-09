import Link from "next/link";

import { ArrowUpRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface ContentProps {
  header: string;
  title: string;
  url?: string;
  description?: string;
  className?: string;
}

export default function Content({
  header,
  title,
  url,
  description,
  className,
}: ContentProps) {
  return (
    <div className={cn("flex gap-6 py-4 text-white", className)}>
      <div className="text-muted-foreground w-24 text-sm">{header}</div>
      <div className="flex-1">
        {url ? (
          <Link
            href="#"
            className="flex items-center gap-0.5 font-medium text-white hover:underline"
          >
            {title}{" "}
            <span>
              <ArrowUpRightIcon className="size-4" strokeWidth={1.5} />
            </span>
          </Link>
        ) : (
          <h3 className="font-medium text-white">{title}</h3>
        )}
        {description && (
          <p className="text-muted-foreground mt-1 text-sm">{description}</p>
        )}
      </div>
    </div>
  );
}
