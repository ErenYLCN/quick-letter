"use client";

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  actions?: {
    label: React.ReactNode;
    handler: () => void;
  }[];
}

function Card({ children, className = "", actions }: CardProps) {
  return (
    <div className={`bg-gray-800 rounded-lg shadow-md p-6 flex items-center justify-between ${className}`}>
      {children}
      {actions?.map((action, index) => (
        <button key={index} onClick={action.handler} className={"bg-blue-500 text-white py-2 px-4 rounded"}>
          {action.label}
        </button>
      ))}
    </div>
  );
}

export default Card;
