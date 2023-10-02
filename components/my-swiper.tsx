"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
  A11y,
  Mousewheel,
  Parallax,
} from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/mousewheel";
import { ImageSeriesProps } from "@/utils/types";
import { getPhotoSeries } from "@/utils/contentful-fetches";
import { use } from "react";

export default function MySwiper({ data }: { data: any }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[
        Navigation,
        Pagination,
        Parallax,
        A11y,
        EffectCoverflow,
        Mousewheel,
      ]}
      spaceBetween={50}
      mousewheel={true}
      //   effect={"coverflow"}
      coverflowEffect={{
        rotate: 10,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      //   direction={"vertical"}
      slidesPerView={2}
      //   navigation
      parallax={true}
      pagination={{ clickable: true }}
      //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {data.props.images.map((image: ImageSeriesProps, index: number) => (
        <SwiperSlide key={index}>
          <Image
            style={{
              transform: "translate3d(0, 0, 0)",
              height: 400,
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
          {/* <div className="hidden md:block my-16 max-w-2xl">
            <p className="my-3 opacity-50 group-hover:opacity-100 scroll-m-20 md:border-b pb-2 text-xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              {image.seriesTitle}
            </p>
            <p className="text-sm opacity-50 md:text-xl text-white md:text-muted-foreground group-hover:opacity-100 line-clamp-3">
              {image.description} <br /> {image.date}
            </p>
          </div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
