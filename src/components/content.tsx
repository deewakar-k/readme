"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
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
  attachments?: string[];
  className?: string;
  showAction?: boolean;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export default function Content({
  header,
  title,
  role,
  url,
  location,
  description,
  attachments,
  from,
  to,
  className,
  showAction = false,
  onEditClick,
  onDeleteClick,
}: ContentProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  //for smooth cursor flow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // spring physics for smooth following
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return;

    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    mouseX.set(x);
    mouseY.set(y);
  };

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
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="flex-1"
        onMouseEnter={() => setActiveIndex(0)}
        onMouseLeave={() => setActiveIndex(null)}
      >
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
        {activeIndex !== null && attachments && attachments?.length > 0 && (
          <motion.div
            className="pointer-events-none absolute"
            style={{
              x: springX,
              y: springY,
              translateX: "10%",
              translateY: "-50%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative flex items-center">
              <motion.div
                className="overflow-hidden rounded-lg bg-white shadow-xl"
                initial={{
                  opacity: 0,
                  x: 0,
                  y: 0,
                  rotate: -2,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: -2,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Image
                  loader={({ src }) => src}
                  src={attachments[0] || "/placeholder.svg"}
                  alt="attachment"
                  width={240}
                  height={160}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
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
      {showAction && onEditClick && onDeleteClick && (
        <div className="opacity-0 transition-opacity group-hover:opacity-100">
          <ActionMenu onEditClick={onEditClick} onDeleteClick={onDeleteClick} />
        </div>
      )}
    </div>
  );
}
