"use client";
import { MoveRight } from "lucide-react";
import React from "react";

const MyButton = ({ text, ariaLabel }: { text: string; ariaLabel: string }) => {
  return (
    <button
      type="button"
      className={`px-10 flex flex-row gap-2 border border-gray-700 rounded-full py-3 items-center group`}
      aria-label={ariaLabel}
    >
      <span>{text}</span>
      <MoveRight
        size={30}
        strokeWidth={0.8}
        className="group-hover:translate-x-3 transition-transform duration-300"
      />
    </button>
  );
};

export default MyButton;
