import { getAnAsset, getDataPhotographs } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import ModalSwiper from "@/components/swiper/modal-swiper";
import { ImageProps } from "@/utils/types";
import AnimationWrapper from "@/components/ui/animation-wrapper";

type Props = { params: { photoId: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { photoId } = params;
  var data = await getDataPhotographs();
  var alt = data.props.images
    .map(function (e: { alt: any }) {
      return e.alt;
    })
    .indexOf(photoId);

  return {
    title: `Photograph | ${alt}`,
  };
}

export async function generateStaticParams() {
  const dataAll = await getDataPhotographs();
  const data = dataAll.props.images;
  return data.map((image: any) => ({
    photoId: image.idc.toString(),
    revalidate: 86400,
  }));
}

async function Page({ params }: Props) {
  var data = await getDataPhotographs();
  var idc = params.photoId;
  return (
    <AnimationWrapper>
      <div>
        <ModalSwiper images={data.props.images} idc={idc} show={false} />
      </div>
    </AnimationWrapper>
  );
}
export default Page;

// :TODO: need to add a 404 page for when the photoId is not found
