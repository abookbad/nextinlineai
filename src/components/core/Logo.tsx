import * as React from "react";

type LogoProps = React.SVGAttributes<SVGSVGElement> & { size?: number };

export function Logo({ size = 28, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Next In Line AI logo"
      {...props}
    >
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#276EF1" />
          <stop offset="100%" stopColor="#2ECC71" />
        </linearGradient>
      </defs>
      {/* Infinity -> clock hybrid */}
      <path
        d="M12 24c6-8 18-8 24 0l3 4-3 4c-6 8-18 8-24 0s-6-16 0-24"
        stroke="url(#g)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="46" cy="32" r="12" stroke="url(#g)" strokeWidth="4" />
      <path d="M46 26v7l5 3" stroke="#276EF1" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default Logo;


