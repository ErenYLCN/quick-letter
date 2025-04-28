import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean | "dialog" | "grid" | "listbox" | "menu" | "tree";

  variant?: "primary" | "secondary" | "danger";
}

function Button({ children, className, ariaLabel, ariaExpanded, ariaHasPopup, variant = "primary", disabled, ...rest }: ButtonProps) {
  const baseStyles = "p-2 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white border-transparent focus:ring-blue-500",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border-transparent focus:ring-gray-500",
    danger: "bg-red-600 hover:bg-red-700 text-white border-transparent focus:ring-red-500",
  };
  const disabledStyles = "opacity-50 cursor-not-allowed";

  return (
    <button className={classNames(baseStyles, variantStyles[variant], disabled && disabledStyles, className)} aria-label={ariaLabel} aria-expanded={ariaExpanded} aria-haspopup={ariaHasPopup} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
