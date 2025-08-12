"use client";

import Link, { LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { track } from "@/lib/analytics";

type TrackedLinkProps = PropsWithChildren<
  LinkProps & {
    className?: string;
    "aria-label"?: string;
    analytics?: { eventName: string; payload?: Record<string, unknown> };
  }
>;

export default function TrackedLink({ analytics, children, ...rest }: TrackedLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        if (analytics) {
          track(analytics.eventName, analytics.payload);
        }
        // preserve any user-provided onClick on child button if needed
      }}
    >
      {children}
    </Link>
  );
}


