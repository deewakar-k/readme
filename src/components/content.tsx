import { ArrowUpRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { ActionMenu } from "./action-menu";

interface ContentProps {
  title: string;
  role?: string;
  header?: string;
  from?: string;
  to?: string;
  url?: string;
  description?: string;
  location?: string;
  className?: string;
  showAction: boolean;
}

export default function Content({
  header,
  title,
  role,
  url,
  location,
  description,
  from,
  to,
  className,
  showAction = false,
}: ContentProps) {
  const displayText = role ? `${role} at ${title}` : title;

  return (
    <div
      className={cn(
        "group flex gap-6 py-4 text-black dark:text-white",
        className
      )}
    >
      {from && to ? (
        <div className="text-muted-foreground w-24 text-sm">
          {from} - {to}
        </div>
      ) : (
        <div className="text-muted-foreground w-24 text-sm capitalize">
          {header}
        </div>
      )}
      <div className="flex-1">
        {url ? (
          <a
            href={url.startsWith("http") ? url : `https://${url}`}
            target="_blank"
            className="flex items-center gap-0.5 font-medium text-black hover:underline dark:text-white"
          >
            {displayText}
            <span>
              <ArrowUpRightIcon className="size-4" strokeWidth={1.5} />
            </span>
          </a>
        ) : (
          <h3 className="font-medium text-black dark:text-white">
            {displayText}
          </h3>
        )}
        {location && (
          <p className="text-muted-foreground mt-1 text-sm">{location}</p>
        )}
        {description && (
          <p className="text-muted-foreground mt-1 max-w-xs text-sm">
            {description}
          </p>
        )}
      </div>
      {showAction && (
        <div className="opacity-0 transition-opacity group-hover:opacity-100">
          <ActionMenu />
        </div>
      )}
    </div>
  );
}
