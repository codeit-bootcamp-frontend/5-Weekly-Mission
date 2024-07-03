"use client";

import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: "xs" | "sm" | "md" | "lg";
  isActive?: boolean;
  buttonActive?: boolean;
}

export function Button({
  children,
  size,
  isActive,
  buttonActive,
}: ButtonProps) {
  const buttonWidth = {
    xs: "w-[4.8rem]",
    sm: "w-[10rem]",
    md: "w-[28rem]",
    lg: "w-[40rem]",
  };

  return (
    <button
      className={`flex items-center justify-center rounded-[0.8rem] no-underline ${buttonWidth[size]} px-[2rem] py-[1.6rem] text-[1.6rem] font-[700] text-[--Gray-cta] ${buttonActive || isActive ? "bg-[--Linkbrary-gray60]" : "bg-gradient-to-r from-indigo-500 to-cyan-300"}`}
      disabled={buttonActive || isActive}
    >
      {children}
    </button>
  );
}
