import { Header } from "@/components/ui/header-on-page";
import { getPhotoSeries } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Separator } from "@components/ui/separator";
import Link from "next/link";
import { ImageSeriesProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Metadata } from "next";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import MySwiper from "@/components/my-swiper";

type Props = {};

export const metadata: Metadata = {
  title: "Photo Series",
  description: "Photographs in meaningful grouping.",
};

const Page = async (props: Props) => {
  const data = await getPhotoSeries();
  // console.log(await data);

  return (
    <AnimationWrapper>
      <Header
        title="Photo Series"
        subtitle="Photographs in meaningful grouping."
        subtitle2="A message conveyed, a feeling captured through a series of images."
      />
      <div className="p-12 lg m-24">
        <MySwiper data={data} />
      </div>
    </AnimationWrapper>
  );
};

export default Page;
