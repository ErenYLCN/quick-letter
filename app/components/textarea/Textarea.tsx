"use client";

import { TextareaHTMLAttributes, forwardRef, useRef, useState, useEffect } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  maxLength?: number;
  showCounter?: boolean;
  autoResize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ maxLength, showCounter = true, autoResize = true, className = "", ...rest }, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(0);

  const updateCharCount = (value: string) => {
    setCharCount(value.length);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    updateCharCount(target.value);

    if (autoResize) {
      target.style.height = "auto";
      target.style.height = `${target.scrollHeight}px`;
    }

    rest.onChange?.(e);
  };

  useEffect(() => {
    if (autoResize && textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }

    if (rest.defaultValue && typeof rest.defaultValue === "string") {
      updateCharCount(rest.defaultValue);
    }
  }, [autoResize, rest.defaultValue]);

  const combinedRef = (node: HTMLTextAreaElement) => {
    textareaRef.current = node;

    if (typeof ref === "function") {
      ref(node);
    } else if (ref) {
      ref.current = node;
    }
  };

  return (
    <div className={"relative w-full"}>
      <textarea ref={combinedRef} maxLength={maxLength} onChange={handleInput} className={`w-full p-3 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-y min-h-[80px] ${className}`} {...rest} />
      {showCounter && (
        <div className={"text-xs text-gray-500 text-right mt-1"}>
          {charCount} {maxLength ? `/ ${maxLength}` : ""} {"characters"}
        </div>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
