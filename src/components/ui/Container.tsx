import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article";
}

export default function Container({
  className,
  as: Tag = "div",
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
