import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#3b82f6"],
  animationSpeed = 6,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <span
      className={`inline-block text-transparent bg-clip-text animate-gradient ${className}`}
      style={{
        ...gradientStyle,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}
