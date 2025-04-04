import { ForwardedRef, HTMLProps } from "react";

interface TextareaProps extends HTMLProps<HTMLTextAreaElement> {
  ref?: ForwardedRef<HTMLTextAreaElement>;
}

function Textarea({ ref, ...rest }: TextareaProps) {
  return <textarea ref={ref} {...rest} />;
}

export default Textarea;
