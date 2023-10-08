import { Header } from "@/components/ui/header-on-page";
import { getPhotoSeries } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import Link from "next/link";
import { ImageSeriesProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Photo Series",
  description: "Photographs in meaningful grouping.",
};

const Page = async (props: Props) => {
  const data = await getPhotoSeries();
  return (
    <AnimationWrapper>
      <Header
        title="Photo Series"
        subtitle="Photographs in meaningful grouping."
        subtitle2="A message conveyed, a feeling captured through a series of images."
      />

      <div className="flex flex-col items-center justify-between md:px-24 pt-24">
        {data.props.images.map((image: ImageSeriesProps, index: number) => (
          // for each image, show the image alternatingly on left and right with the setiesTitle and description on the other side
          <>
            <Separator className={index === 0 ? "hidden" : ""} />
            <div key={image.id} className="py-10 my-10">
              <Link
                // href={`/photo-series/?photoId=${image.idc}`}
                href={`/photo-series/${image.slug}`}
                className={`grid relative md:static place-content-center md:flex items-center group transition duration-200 rounded-sm ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
                // {`https://twitter.com/intent/tweet?text=Check%20out%20this%20pic%20from%20Next.js%20Conf!%0A%0Ahttps://nextjsconf-pics.vercel.app/p/${index}`}
              >
                <div className="md:hidden text-center mx-2">
                  <p className=" group-hover:opacity-100 scroll-m-20 md:border-b py-1 text-xl md:text-3xl font-semibold tracking-tight transition-colors">
                    {image.seriesTitle}
                  </p>
                  <p className="text-sm md:text-xl md:text-muted-foreground group-hover:opacity-100 line-clamp-2">
                    {image.description} <br /> {image.date}
                  </p>
                </div>
                <Image
                  style={{
                    transform: "translate3d(0, 0, 0)",
                    minHeight: 400,
                    // maxWidth: 500,
                  }}
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={480}
                  quality={50}
                  className="object-cover h-auto max-w-full aspect-auto rounded-sm drop-shadow group-hover:brightness-110 group-hover:shadow-2xl border-2 border-zinc-500/20 dark:group-hover:border-zinc-500/70 "
                  loading={index < 3 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw,
                    (max-width: 1280px) 50vw,
                    (max-width: 1536px) 33vw,
                    25vw"
                  placeholder="blur"
                  blurDataURL={image.blurDataURL}
                />
                {/* {console.log(image.blurDataURL)} */}
                {/* <div className="absolute md:hidden top-0 mb-20 right-0 bottom-0 left-0 bg-gradient-to-b to-transparent from-zinc-900 opacity-80 md:opacity-0 group-hover:opacity-80 "></div> */}
                <div className="hidden md:block md:p-12 lg:m-24 max-w-2xl">
                  <p className="my-3 opacity-50 group-hover:opacity-100 scroll-m-20 md:border-b pb-2 text-xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    {image.seriesTitle}
                  </p>
                  <p className="text-sm opacity-50 md:text-xl text-white md:text-muted-foreground group-hover:opacity-100 line-clamp-3">
                    {image.description} <br /> {image.date}
                  </p>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </AnimationWrapper>
  );
};

export default Page;
