import { Header } from "@/components/ui/header-on-page";
import { getDataPhotographs, getPhotoSeries } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import Link from "next/link";
import { ImageSeriesProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Metadata } from "next";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MySwiper from "@/components/my-swiper";
import ModalSwiper from "@/components/modal-swiper-copy";

type Props = {};

export const metadata: Metadata = {
  title: "Photo Series",
  description: "Photographs in meaningful grouping.",
};

const Page = async (props: Props) => {
  const data = await getDataPhotographs();
  // console.log(await data);

  return (
    <AnimationWrapper>
      <Header
        title="Photo Series"
        subtitle="Photographs in meaningful grouping."
        subtitle2="A message conveyed, a feeling captured through a series of images."
      />
      <ModalSwiper images={data.props.images} index={0} />
    </AnimationWrapper>
  );
};

export default Page;
