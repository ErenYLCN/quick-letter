import Button from "./components/button/Button";
import Textarea from "./components/textarea/Textarea";

export default function Home() {
  return (
    <div>
      {"Welcome to quick letter!!"}
      <Button>{"Hello"}</Button>
      <Textarea placeholder={"write something..."} />
    </div>
  );
}
