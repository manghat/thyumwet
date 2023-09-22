import ThemeToggle from "@/components/ui/my-theme-toggle";
import { Separator } from "@/components/ui/separator";
import MenuElements from "@/lib/menu-elements";

export default function Home() {
  return (
    <>
      <div className="flex relative isolate items-center justify-center h-[calc(100vh-160px)] align-middle px-5">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight  sm:text-6xl">
            Umwelt
          </h1>
          <p className="mt-6 text-sm  md:text-md leading-6 md:leading-8 text-muted-foreground">
            \/ˈʊmvɛlt/ noun (in ethology)
          </p>
          <blockquote>
            <p className="mt-6 text-md md:text-xl font-bold md:font-normal  underline-offset-4	 leading-8">
              the world as it is experienced by a particular organism.
            </p>
          </blockquote>
          <p className="my-6 mb-12 text-sm md:leading-8 text-muted-foreground">
            &quot;the worlds they perceive, their Umwelten, are all
            different&quot;
          </p>
          <Separator />
          <div className="pt-12 text-xs md:text-normal mb-5 lg:hidden opacity-60 ">
            {/* <p className="m-6 ">Dive in:</p> */}
            <MenuElements className="p-5" />
          </div>
          {/* <div className="lg:hidden opacity-60">
            <ModeToggle />
          </div> */}
          <ThemeToggle className="test lg:hidden opacity-60" />
          {/* <ModeToggle className="test lg:hidden opacity-60" /> */}
        </div>
      </div>
    </>
  );
}
