"use client";

import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";
import { ImageProps } from "@/utils/types";
import { Button } from "./ui/button";

type Props = {
  images: ImageProps[];
  index: number;
};

export default function ModalSwiper({ images, index }: Props) {
  const router = useRouter();
  function changePhotoId(index: number) {
    console.log("change to :", index);
    const url = `/photography/${images[index].idc}`;
    router.push(url);
  }
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index < images?.length - 1) {
        changePhotoId(index + 1);
      }
    },
    onSwipedRight: () => {
      if (index > 0) {
        changePhotoId(index - 1);
      }
    },
    trackMouse: true,
  });
  let currentImage = images[index];

  return (
    <div className=" relative z-50 inset-0 mx-auto flex max-w-7xl items-center justify-center">
      <div className="w-full flex flex-col relative z-50" {...handlers}>
        {/* <div className="relative flex flex-col aspect-[3/2] h-screen w-full"> */}
        <h2 className="mx-auto mb-5 text-white">{currentImage.alt}</h2>
        <div className="relative flex items-center justify-center">
          <Image
            src={currentImage?.src}
            width={currentImage.width}
            height={currentImage.height}
            quality={100}
            className="max-h-[85vh] aspect-auto w-auto"
            sizes="100vh"
            blurDataURL={currentImage?.blurDataURL}
            placeholder="blur"
            priority
            alt={currentImage.alt}
            // onLoadingComplete={() => setLoaded(true)}
          />
        </div>
        <div className="flex">
          <Button onClick={() => changePhotoId(index - 1)}> Previous </Button>
          <Button onClick={() => changePhotoId(index + 1)}> Next </Button>
        </div>
      </div>
    </div>
  );
}
