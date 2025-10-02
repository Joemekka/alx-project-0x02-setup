"use client";

import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
  children,
  onClick,
}) => {
  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white ${sizeClasses} ${shape} hover:bg-blue-700 transition`}
    >
      {children}
    </button>
  );
};

export default Button;
