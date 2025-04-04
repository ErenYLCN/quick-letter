import { ForwardedRef, TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref?: ForwardedRef<HTMLTextAreaElement>;
}

function Textarea({ ref, ...rest }: TextareaProps) {
  return <textarea ref={ref} {...rest} />;
}

export default Textarea;
