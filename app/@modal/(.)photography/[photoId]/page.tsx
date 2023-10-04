import ModalSwiper from "@/components/modal-swiper-copy";
import MySwiper from "@/components/my-swiper";
import Modal from "@/components/ui/Modal";
import { getDataPhotographs } from "@/utils/contentful-fetches";
import { ImageProps } from "@/utils/types";
import React from "react";

type Props = { params: { photoId: string } };

export default async function Page({ params }: Props) {
  const { photoId } = params;
  const data = await getDataPhotographs();
  const index = data.props.images
    .map((e: ImageProps) => e.idc)
    .indexOf(photoId);

  // const currentImage = data;
  return (
    <Modal>
      <div className=" relative z-50 inset-0 mx-auto text-white flex max-w-7xl items-center justify-center">
        <ModalSwiper images={data.props.images} index={index} />
      </div>
    </Modal>
  );
}
