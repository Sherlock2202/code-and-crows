// src/components/ui/progress.jsx
import React from "react";

// A simple progress bar component
export const Progress = ({ value, className }) => {
  return (
    <div className={`w-full bg-gray-200 ${className}`}>
      <div
        className="bg-blue-500 h-2"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
