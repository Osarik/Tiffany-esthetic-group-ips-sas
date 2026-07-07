import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
}

export default function Section({
  className,
  children,
  dark,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        dark ? "bg-clinic-bg" : "bg-white",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
