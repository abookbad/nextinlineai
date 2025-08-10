import * as React from "react";
import { cn } from "@/lib/utils";

type SectionTag = keyof HTMLElementTagNameMap; // restrict to HTML elements only
type SectionProps = React.HTMLAttributes<HTMLElement> & { as?: SectionTag };

export function Section({ className, as: Tag = "section", ...props }: SectionProps) {
  return <Tag className={cn("py-16 sm:py-24", className)} {...props} />;
}

export default Section;


