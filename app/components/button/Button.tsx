import { ButtonHTMLAttributes, ReactNode, RefObject } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ref?: RefObject<HTMLButtonElement>;
}

function Button({ children, ref, ...rest }: ButtonProps) {
  return (
    <button ref={ref} onClick={handleClick} {...rest}>
      {children}
    </button>
  );

  function handleClick() {
    console.log("button clicked");
  }
}

export default Button;
