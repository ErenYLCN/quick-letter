import { cookies } from "next/headers";
import Button from "./components/button/Button";
import Textarea from "./components/textarea/Textarea";
import Form from "next/form";
import Card from "./components/card/Card";

export default async function Home() {
  const cookie = await cookies();
  const paragraphs = cookie.get("paragraphs");
  const parsedParagraphs: string[] = paragraphs ? JSON.parse(paragraphs.value) : [];

  const paragraphFormAction = async (formData: FormData) => {
    "use server";
    const cookie = await cookies();
    const paragraph = formData.get("paragraph");

    cookie.set("paragraphs", JSON.stringify([...JSON.parse((cookie.get("paragraphs")?.value || "[]") as string), paragraph]));
  };

  const handleDelete = async (index: number) => {
    "use server";
    const cookie = await cookies();
    const paragraphs = cookie.get("paragraphs");
    const parsedParagraphs: string[] = paragraphs ? JSON.parse(paragraphs.value) : [];
    parsedParagraphs.splice(index, 1);
    cookie.set("paragraphs", JSON.stringify(parsedParagraphs));
  };

  return (
    <div>
      <Form action={paragraphFormAction}>
        <div>
          <Textarea name={"paragraph"} className={"w-full max-w-4/5"} placeholder={"write something..."} />
        </div>
        <div>
          <Button type={"submit"}>{"Saave Paragraph"}</Button>
        </div>
      </Form>

      <ul className={"max-w-2xl"}>
        {parsedParagraphs.map((p, i) => (
          <li key={i}>
            {/* // TODO: work more on understanding optimal architecture */}
            <Card actions={[{ label: "TRASH", handler: () => handleDelete(i) }]}>{p}</Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
