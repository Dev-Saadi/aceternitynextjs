// components/Card.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface CardProps {
  title: string;
  onClick: () => void;
  isSelected?: boolean;
}

const Card: React.FC<CardProps> = ({ title, onClick, isSelected }) => {
  return (
    <button
      className={`bg-white border border-gray-300 rounded-md p-4 flex items-center justify-between hover:shadow-md transition-shadow duration-200 ${
        isSelected ? "border-blue-500 shadow-lg" : ""
      }`}
      onClick={onClick}
    >
      {/* Card Title */}
      <span className="font-medium text-gray-800">{title}</span>

      {/* Right Arrow Icon */}
      <ChevronRight className="w-5 h-5 text-gray-500" />
    </button>
  );
};

export default Card;
