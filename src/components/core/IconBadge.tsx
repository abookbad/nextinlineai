import * as React from "react";
import { cn } from "@/lib/utils";

type IconBadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  icon: React.ReactNode;
};

export function IconBadge({ className, icon, ...props }: IconBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/30 bg-white/60 text-[var(--nl-blue)] shadow-sm backdrop-blur",
        className
      )}
      aria-hidden
      {...props}
    >
      {icon}
    </div>
  );
}

export default IconBadge;


