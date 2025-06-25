import React, { ReactNode } from "react";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyles = `
    font-semibold
    flex items-center justify-center
    transition-colors duration-200
    rounded-md
  `;

  // Variant-specific styles
  let variantStyles = "";
  switch (variant) {
    case "default":
      variantStyles = `
        bg-red-600
        text-white
        hover:bg-red-700
      `;
      break;
    case "outline":
      variantStyles = `
        border border-red-600
        text-red-600
        hover:bg-red-50
      `;
      break;
    case "secondary":
      variantStyles = `
        bg-gray-200
        text-gray-800
        hover:bg-gray-300
      `;
      break;
    case "ghost":
      variantStyles = `
        text-red-600
        hover:bg-red-50
      `;
      break;
    case "link":
      variantStyles = `
        text-blue-600
        hover:underline
      `;
      break;
    default:
      variantStyles = `
        bg-red-600
        text-white
        hover:bg-red-700
      `;
  }

  // Combine all styles
  const combinedClasses = `${baseStyles} ${variantStyles} ${className || ""}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
