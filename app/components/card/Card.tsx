"use client";

import React, { ReactNode } from "react";

interface CardAction {
  label: React.ReactNode;
  handler: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  footer?: ReactNode;
  actions?: CardAction[];
  contentClassName?: string;
  actionsClassName?: string;
}

function Card({ children, className = "", title, footer, actions, contentClassName = "", actionsClassName = "" }: CardProps) {
  // Function to determine button style based on variant
  const getButtonStyle = (variant: CardAction["variant"] = "primary", disabled: boolean = false) => {
    const baseStyle = "py-2 px-4 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50";

    if (disabled) {
      return `${baseStyle} bg-gray-400 cursor-not-allowed text-gray-100`;
    }

    switch (variant) {
      case "secondary":
        return `${baseStyle} bg-gray-600 hover:bg-gray-500 text-white focus:ring-gray-400`;
      case "danger":
        return `${baseStyle} bg-red-500 hover:bg-red-400 text-white focus:ring-red-400`;
      default:
        return `${baseStyle} bg-blue-500 hover:bg-blue-400 text-white focus:ring-blue-400`;
    }
  };

  return (
    <div className={`bg-gray-800 rounded-lg shadow-md overflow-hidden ${className}`}>
      {title && (
        <div className={"px-6 py-4 border-b border-gray-700"}>
          <h3 className={"text-lg font-medium text-white"}>{title}</h3>
        </div>
      )}

      <div className={`p-6 ${contentClassName}`}>{children}</div>

      {actions && actions.length > 0 && (
        <div className={`px-6 py-4 bg-gray-700 flex flex-wrap items-center gap-3 ${actionsClassName}`}>
          {actions.map((action, index) => (
            <button key={index} onClick={action.handler} disabled={action.disabled} className={getButtonStyle(action.variant, action.disabled)}>
              {action.label}
            </button>
          ))}
        </div>
      )}

      {footer && <div className={"px-6 py-4 bg-gray-700 border-t border-gray-700"}>{footer}</div>}
    </div>
  );
}

export default Card;
