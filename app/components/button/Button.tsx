import classNames from "classnames";
import { ButtonHTMLAttributes, RefObject } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: RefObject<HTMLButtonElement>;
}

function Button({ children, ref, className, ...rest }: ButtonProps) {
  return (
    <button className={classNames(className, "p-2 border-amber-300 border-2")} ref={ref} {...rest}>
      {children}
    </button>
  );
}

export default Button;
