"use client";

import { RefObject, useRef } from "react";
import Button from "./components/button/Button";
import Textarea from "./components/textarea/Textarea";

export default function Home() {
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <div>
      {"Welcome to quick letter!!"}
      <Button ref={ref as RefObject<HTMLButtonElement>}>{"Hello"}</Button>
      <Textarea placeholder={"write something..."} />
    </div>
  );
}
