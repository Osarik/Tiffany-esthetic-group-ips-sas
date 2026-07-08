import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer",
          {
            "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]":
              variant === "primary",
            "bg-primary-dark text-white hover:bg-primary-deep shadow-lg shadow-primary-dark/25 active:scale-[0.97]":
              variant === "secondary",
            "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.97]":
              variant === "outline",
            "bg-primary-deep text-white hover:bg-[#0A3530] shadow-lg shadow-primary-deep/25 active:scale-[0.97]":
              variant === "accent",
          },
          {
            "px-5 py-2 text-sm": size === "sm",
            "px-8 py-3 text-base": size === "md",
            "px-10 py-4 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
