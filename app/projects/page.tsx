import { Header } from "@/components/ui/header-on-page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Props = {};

const projects = [
  {
    name: "Trod - Converse",
    href: "https://trodv1.streamlit.app/Converse",
    description:
      "A conversational app that helps you learn anything by understanding your context. Prompts are preconfigured for you to get started.",
    builtWith: "Streamlit, Langchain, LLM, Prompt Engineering",
  },
  {
    name: "Trod - Researcher",
    href: "https://trodv1.streamlit.app/Researcher",
    description:
      "A RAG and search enabled conversational app that can search the web for answers and summarise them for you.",
    builtWith: "Streamlit, Langchain, SerpAPI, LLM",
  },
];

const Page = (props: Props) => {
  return (
    <>
      <Header
        title="Projects / areas of interest"
        subtitle="Code projects which will most likely be half baked :D"
      />
      <div className="grid md:grid-cols-3 gap-3 container py-24">
        {projects.map((item, index) => (
          <Card key={index} className="group hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              {/* <CardDescription>Card Description</CardDescription> */}
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardDescription className="grow">
                {item.builtWith.split(", ").map((item, index) => (
                  <Badge key={index} variant="secondary" className="pr-1">
                    {item.trim()}
                  </Badge>
                ))}
              </CardDescription>
              <Button variant="ghost" className="justify-self-end" asChild>
                <a
                  href={item.href}
                  className="group-hover:underline justify-self-end"
                  target="_blank"
                >
                  View
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Page;
