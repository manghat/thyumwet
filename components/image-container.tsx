// "use client";
import { ImageProps } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  image: ImageProps;
  index: number;
  href: string;
};

export default function ImageContainer({ image, index, href }: Props) {
  const widthHeightRatio = image.height / image.width;
  const galleryHeight = Math.ceil(500 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 5) + 3;

  return (
    <div
      className="md:w-[500px] justify-self-center "
      style={{ gridRow: `span ${photoSpans}` }}
      key={index}
    >
      <div
        className="relative group group-hover:brightness-150 transition duration-200 group-hover:shadow-lg
        hover:shadow-indigo-500/90 border-2 border-zinc-500/20 hover:border-zinc-500/70 rounded-sm"
      >
        <Link
          //   href={`${href}?photoId=${index}`}
          href={`/photography/${image.idc}`}
          // replace
          scroll={false}
          className="grid place-content-center"
          // style={{ backgroundColor: image.blurDataURL }}
        >
          <Image
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={image.src}
            alt={image.alt}
            width={720}
            height={480}
            quality={80}
            className="rounded-sm  "
            // onLoadingComplete={(image) => image.classList.remove("opacity-0")}
            loading={index < 10 ? "eager" : "lazy"}
            // sizes="250px"
            sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
            placeholder="blur"
            blurDataURL={image.blurDataURL}
          />

          <div className="absolute rounded-b-sm top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-zinc-900 opacity-80 md:opacity-0 group-hover:opacity-80 "></div>
          <div>
            <p className=" text-xs absolute bottom-1 text-white px-2 transition duration-200 opacity-70 md:opacity-0 group-hover:opacity-75 ">
              {image.alt}
              <span className="text-xs font-light line-clamp-1 block opacity-75">
                {image.date}
              </span>
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
