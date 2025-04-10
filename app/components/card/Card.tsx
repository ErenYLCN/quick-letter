"use client";

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  actions?: {
    label: string;
    handler: () => void;
  }[];
}

function Card({ children, className = "", actions }: CardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {children}
      {actions?.map((action, index) => (
        <button key={index} onClick={action.handler} className={"mt-4 bg-blue-500 text-white py-2 px-4 rounded"}>
          {action.label}
        </button>
      ))}
    </div>
  );
}

export default Card;
