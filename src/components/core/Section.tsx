import * as React from "react";
import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & { as?: "section" | "div" | "article" | "main" };

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Tag = "section", ...props }, ref) => {
    return React.createElement(Tag, {
      ref,
      className: cn("py-16 sm:py-24", className),
      ...props
    });
  }
);

Section.displayName = "Section";

export default Section;


