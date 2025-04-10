// src/components/ui/card.jsx
import React from "react";

export const Card = ({ children, className }) => (
  <div className={`border rounded p-4 shadow ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>
    {children}
  </div>
);
