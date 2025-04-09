import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return <div className={`bg-gray-500 rounded-lg shadow-md p-6 ${className}`}>{children}</div>;
}

export default Card;
