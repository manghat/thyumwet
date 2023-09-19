import { getDataPhotographs } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

type Props = { photoId: string; href: string };

// :TODO: need to use href to update the URL for the next and previous buttons

const Page = async ({ params }: { params: Props }) => {
  const { photoId } = params;
  const data = await getDataPhotographs();
  return (
    <div className="container flex flex-col my-10">
      <div className="flex justify-center">
        <Button className="" variant="link" asChild>
          <Link
            className="flex-none my-10 opacity-30 hover:opacity-100"
            href={`/photography/${Number(photoId) - 1}`}
          >
            <ArrowLongLeftIcon className="w-6 h-6 py-1 ml-2" />
            Previous
          </Link>
        </Button>
        <Button className="" variant="link" asChild>
          <Link
            className="flex-none my-10 opacity-30 hover:opacity-100"
            href={"/photography"}
          >
            <PhotoIcon className="w-6 h-6 py-1 mr-2" />
            Go to Gallery
          </Link>
        </Button>
        <Button className="" variant="link" asChild>
          <Link
            className="flex-none my-10 opacity-30 hover:opacity-100"
            href={`/photography/${Number(photoId) + 1}`}
          >
            Next
            <ArrowLongRightIcon className="w-6 h-6 py-1 ml-2" />
          </Link>
        </Button>
      </div>
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
      <div className="flex justify-center">
        <Button className="" variant="link" asChild>
          <Link
            className="flex-none my-10 opacity-30 hover:opacity-100"
            href={"/photography"}
          >
            <PhotoIcon className="w-6 h-6 py-1 mr-2" />
            Go to Gallery
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Page;

// :TODO: need to add a 404 page for when the photoId is not found
// :TODO: need to check if I can navigate to the next photoId and previous photoId using the URL