import React from "react";

export interface BadgeProps {
  text: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
}

export default function Badge({
  text,
  textColor = "#EA580C",
  backgroundColor = "linear-gradient(95deg, rgba(255, 207, 182, 0.30) -26.16%, rgba(255, 169, 125, 0.70) 142.98%)",
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`px-4 py-2 rounded-full w-fit ${className}`}
      style={{
        background: backgroundColor,
      }}
    >
      <span className="text-base font-semibold" style={{ color: textColor }}>
        {text}
      </span>
    </div>
  );
}
