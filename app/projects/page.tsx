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
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { CardShadow } from "@/components/ui/card-shadow";
import Link from "next/link";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Project",
  description: "The prohects I have been working on",
};

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
      "RAG and search enabled conversational app that can search the web for answers and summarise them for you.",
    builtWith: "Streamlit, Langchain, SerpAPI, LLM",
  },
];

const Page = (props: Props) => {
  return (
    <AnimationWrapper>
      <Header
        title="Projects in areas of interest"
        subtitle="Code projects which will most likely be half baked :D"
      />
      {/* <div className="grid md:grid-cols-3 gap-3 container py-24">
        {projects.map((item, index) => (
          <Card key={index} className="group hover:scale-105 transition-all">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <CardDescription className="grow">
                {item.builtWith.split(", ").map((item, index) => (
                  <Badge key={index} variant="outline" className="m-1">
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
      </div> */}
      <div className="grid md:grid-cols-3 gap-3 container py-24">
        {projects.map((item, index) => (
          <CardShadow key={index}>
            <Link
              href={item.href}
              className="group-hover:bg-background justify-self-end"
              target="_blank"
            >
              <div className="flex  p-6">
                <CardTitle className="grow text-xl font-medium duration-1000 lg:text-3xl text-foreground group-hover:text-bold ">
                  {item.name}
                </CardTitle>
                {/* <ArrowTopRightIcon /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 justify-self-end opacity-0 text-foreground group-hover:text-bold group-hover:opacity-80 transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>

                {/* <CardDescription>Card Description</CardDescription> */}
              </div>
              <CardContent>
                <div className="mt-4 text-sm  duration-1000">
                  {item.description}
                </div>
              </CardContent>
              <CardFooter>
                <CardDescription className="grow">
                  {item.builtWith.split(", ").map((item, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="mr-1 my-1"
                    >
                      {item.trim()}
                    </Badge>
                  ))}
                </CardDescription>
                {/* <Button variant="ghost" className="justify-self-end" asChild>

                  View
                
              </Button> */}
              </CardFooter>
            </Link>
          </CardShadow>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default Page;
