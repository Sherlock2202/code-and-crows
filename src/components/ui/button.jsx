// src/components/ui/button.jsx
import React from "react";

export const Button = ({ children, onClick, className }) => (
  <button onClick={onClick} className={`py-2 px-4 bg-blue-500 text-white rounded ${className}`}>
    {children}
  </button>
);
