import Button from "./components/button/Button";
import Textarea from "./components/textarea/Textarea";

export default function Home() {
  return (
    <div>
      <div>
        <Textarea className={"w-full max-w-4/5"} placeholder={"write something..."} />
      </div>
      <div>
        <Button>{"Saave Paragraph"}</Button>
      </div>
    </div>
  );
}
