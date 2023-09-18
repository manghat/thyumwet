import ThemeToggle from "@/components/ui/my-theme-toggle";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/ui/theme-toggle";
import MenuElements from "@/lib/menu-elements";

export default function Home() {
  return (
    <>
      <div className="flex relative isolate items-center justify-center h-[calc(100vh-84px)] align-middle px-5">
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
          <h2 className="absolute bottom-3 text-xs md:text-normal left-0 opacity-60 right-0 m-auto w-5/6 md:w-1/2  scroll-m-20 border-b p-5 pt-10 text-md  tracking-tight transition-colors first:mt-0">
            by Ashwin Manghat
          </h2>
        </div>
      </div>
    </>
  );
}
