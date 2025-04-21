import { cookies } from "next/headers";
import Button from "./components/button/Button";
import Textarea from "./components/textarea/Textarea";
import Form from "next/form";
import Card from "./components/card/Card";
import { Trash } from "lucide-react";
import ExportButton from "./components/export-button/ExportButton";

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

  return (
    <main className={"flex"}>
      <div className={"border-r-2 border-gray-200 p-8 h-full min-w-md"}>
        <div className={"flex flex-col h-full"}>
          <div className={"flex-grow"}>
            <Form action={paragraphFormAction}>
              <div>
                <Textarea name={"paragraph"} className={"w-full min-h-24 min-w-[382px]"} placeholder={"write something..."} />
              </div>
              <div className={"text-right"}>
                <Button type={"submit"} className={"mt-2"}>
                  {"Save Paragraph"}
                </Button>
              </div>
            </Form>

            <h1 className={"text-2xl font-bold mb-4"}>{"My Paragraphs"}</h1>

            <ul className={"max-w-2xl"}>
              {parsedParagraphs.map((p, i) => (
                <li key={i} className={"mb-4"}>
                  {/* // TODO: work more on understanding optimal architecture */}
                  <Card
                    actions={[
                      {
                        label: <Trash size={16} />,
                        handler: async () => {
                          "use server";
                          const cookie = await cookies();
                          const paragraphs = cookie.get("paragraphs");
                          const parsedParagraphs: string[] = paragraphs ? JSON.parse(paragraphs.value) : [];
                          parsedParagraphs.splice(i, 1);
                          cookie.set("paragraphs", JSON.stringify(parsedParagraphs));
                        },
                      },
                    ]}
                  >
                    {p}
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={"grow p-12"}>{"Assembly"}</div>
      <aside className={"border-l-2 border-gray-200 pl-8 pr-4 h-full w-64"}>
        <h2>{"Options"}</h2>

        <ExportButton />
      </aside>
    </main>
  );
}
