import { cn } from "@/lib/utils";

interface HeadingProps {
  as?: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export default function Heading({
  as: Tag = "h2",
  children,
  className,
  accent,
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "text-balance font-heading font-bold leading-tight tracking-tight",
        {
          "text-4xl md:text-5xl lg:text-6xl": Tag === "h1",
          "text-3xl md:text-4xl lg:text-5xl": Tag === "h2",
          "text-2xl md:text-3xl": Tag === "h3",
          "text-xl md:text-2xl": Tag === "h4",
        },
        accent && "text-accent",
        className
      )}
    >
      {children}
    </Tag>
  );
}
