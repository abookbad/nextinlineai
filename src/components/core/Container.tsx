import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  width?: "lg" | "xl" | "2xl";
};

export function Container({ className, width = "xl", ...props }: ContainerProps) {
  const widths = {
    lg: "max-w-5xl",
    xl: "max-w-7xl",
    "2xl": "max-w-[88rem]",
  } as const;
  return (
    <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widths[width], className)} {...props} />
  );
}

export default Container;


