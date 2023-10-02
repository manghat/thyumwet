// "use client";

// import { ImageProps } from "@/utils/types";
// import React from "react";

// import { useState } from "react";
// import Image from "next/image";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";

// type Props = {
//   images: ImageProps[];
//   photoId: string;
// };

// export default function ModalSwiper({ images, photoId }: Props) {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   return (
//     <section className="min-h-screen bg-black py-12">
//       <div className="container">
//         <Swiper
//           loop={true}
//           spaceBetween={10}
//           navigation={true}
//           thumbs={{
//             swiper:
//               thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
//           }}
//           modules={[FreeMode, Navigation, Thumbs]}
//           className="h-96 w-full rounded-lg"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <div className="flex h-full w-full items-center justify-center">
//                 <Image
//                   src={image?.src}
//                   width={image.width}
//                   height={image.height}
//                   quality={100}
//                   className="max-h-[85vh] aspect-auto w-auto"
//                   sizes="100vh"
//                   blurDataURL={image?.blurDataURL}
//                   placeholder="blur"
//                   priority
//                   alt={image.alt}
//                   // onLoadingComplete={() => setLoaded(true)}
//                 />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { ImageProps } from "@/utils/types";

import { cn } from "@/lib/utils";

import "swiper/css";
type Props = {
  images: ImageProps[];
  photoId: string;
};

export default function ModalSwiper({ images, photoId }: Props) {
  const [swiper, setSwiper] = useState(null);
  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <section className="relative min-h-screen py-12 text-white">
      <div className="container">
        <div className="my-10">
          <button onClick={() => setShowNavigation((open) => !open)}>
            View All
          </button>
        </div>

        {/* navigation */}
        <nav className={cn("my-10", !showNavigation && "hidden")}>
          <ul className="flex gap-4">
            {images.map((image, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    swiper.slideTo(index);
                    // setShowNavigation(false)
                  }}
                  className="relative block h-20 w-20 overflow-hidden rounded-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={100}
                    height={100}
                    sizes="100px"
                    blurDataURL={image?.blurDataURL}
                    placeholder="blur"
                    className="block h-full w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main slides */}
        <Swiper
          spaceBetween={10}
          onSwiper={setSwiper}
          className="h-suto w-full rounded-lg"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
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
      </div>
    </section>
  );
}
