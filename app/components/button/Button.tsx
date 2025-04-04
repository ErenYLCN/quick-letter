import { ReactNode } from "react";
import { ForwardedRef } from "react";

interface ButtonProps {
  children: ReactNode;
  ref?: ForwardedRef<HTMLButtonElement>;
}

function Button({ children, ref }: ButtonProps) {
  console.log(ref);

  return <button ref={ref}>{children}</button>;
}

export default Button;
