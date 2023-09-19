import { getDataPhotographs } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = { photoId: string; href: string };

const Page = async ({ params }: { params: Props }) => {
  const { photoId } = params;
  // params.photoId = "10";
  // console.log(params);
  const data = await getDataPhotographs();
  return (
    <div className="container flex flex-col my-10">
      <Button className="" variant="link" asChild>
        <Link
          className="flex-none my-10 opacity-70 hover:opacity-100"
          href={"/photography"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 py-1 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          Go to Gallery
        </Link>
      </Button>
      {/* <h1 className="mx-auto scroll-m-20 pb-5 text-3xl font-semibold tracking-tight transition-colors first:mt-0"> */}
      <h1 className="mx-auto pb-5 scroll-m-20 text-xl font-semibold tracking-tight">
        {data.props.images[photoId].alt}
      </h1>
      <Image
        style={{
          transform: "translate3d(0, 0, 0)",
          width: "auto",
          maxWidth: "100%",
          maxHeight: "100vh",
        }}
        src={data.props.images[photoId].src}
        alt={data.props.images[photoId].alt}
        width={1920}
        height={1280}
        quality={100}
        className="rounded-sm  mx-auto  w-full"
        // onLoadingComplete={(data.props.images[photoId]) => data.props.images[photoId].classList.remove("opacity-0")}
        loading={"eager"}
        sizes="100vh"
        // sizes="(max-width: 640px) 100vw,
        //     (max-width: 1280px) 100vw,
        //     (max-width: 1536px) 100vw,
        //     100vw"
        placeholder="blur"
        blurDataURL={data.props.images[photoId].blurDataURL}
      />

      <h2 className=" mx-auto text-xs text-center md:text-normal opacity-60 mx-auto w-5/6 md:w-1/2  scroll-m-20 pt-10 text-md  tracking-tight transition-colors first:mt-0">
        by Ashwin Manghat
      </h2>
      <Button className="" variant="link" asChild>
        <Link
          className="flex-none my-5 opacity-70 hover:opacity-100"
          href={"/photography"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 py-1 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
          Go to Gallery
        </Link>
      </Button>
    </div>
  );
};

export default Page;
