"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImageProps } from "@/utils/types";
import { Keyboard, FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

type Props = {
  images: ImageProps[];
  index: number;
};

function ModalSwiper({ images, index }: Props) {
  const router = useRouter();

  const changeRoute = (id: number) => {
    console.log(id);
    // router.replace(`/test/${id}`, { scroll: false });
    history.replaceState(null, "", `/test/${id}`);
    // :TODO: change url without reloading currenlty is a hack because of the soft navigation not working.
  };

  // const [swiper, setSwiper] = useState<typeof Swiper | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);

  return (
    <div className="relative min-h-screen py-12 text-white">
      <div className="container">
        {/* Main slides */}
        <Swiper
          style={{
            // @ts-ignore
            "--swiper-navigation-color": "#fff",
          }}
          history={{
            key: "slide",
          }}
          onSlideChange={(swiper) => {
            const currentSlideElement = swiper.slides[swiper.activeIndex];
            const currentSlideId = currentSlideElement.getAttribute("data-id");
            changeRoute(Number(currentSlideId));
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          // thumbs={{ swiper: thumbsSwiper }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            // slideThumbActiveClass: "my-active-thumb-class",
          }}
          modules={[Keyboard, FreeMode, Navigation, Thumbs]}
          initialSlide={index}
          className="h-auto w-full rounded-lg mySwiper2"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} data-id={image.id}>
              <div className="flex h-[80vh] w-full items-center justify-center">
                <Image
                  src={image?.src}
                  width={image.width}
                  height={image.height}
                  quality={100}
                  className="max-h-[85vh] aspect-auto w-auto"
                  sizes="100vh"
                  blurDataURL={image?.blurDataURL}
                  placeholder="blur"
                  priority
                  alt={image.alt}
                  // onLoadingComplete={() => setLoaded(true)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Thumbnail */}
        <div className="my-10">
          <Swiper
            onSwiper={setThumbsSwiper}
            // injectStyles={}
            loop={true}
            spaceBetween={12}
            keyboard={{
              enabled: true,
            }}
            // thumbs={{
            //   slideThumbActiveClass: "my-active-thumb-class",
            // }}
            breakpoints={{
              640: {
                slidesPerView: 5,
                spaceBetween: 9,
              },
              768: {
                slidesPerView: 9,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 10,
                spaceBetween: 12,
              },
            }}
            slidesPerView={4}
            initialSlide={index}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Keyboard, FreeMode, Navigation, Thumbs]}
            className="thumbs h-24 w-full mySwiper-thumb overflow-visible"
            // className="thumbs fixed inset-x-0 bottom-0 z-40 overflow-hidden bg-gradient-to-b from-black/0 to-black/60"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="">
                <div className="w-full h-full ">
                  <button
                    className="flex w-full h-full items-center justify-center rounded-lg"
                    onClick={() => console.log("clicked")}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={100}
                      sizes="100px"
                      blurDataURL={image?.blurDataURL}
                      placeholder="blur"
                      className="block object-cover w-full h-full rounded-lg"
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ModalSwiper;
