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

// export const revalidate = 60 * 60 * 24; // 1 day

// export async function generateStaticParams() {
//   var dataAll = await getDataPhotographs();
//   var idc_ = dataAll.props.images.map(function (e: { idc: any }) {
//     return e.idc;
//   });
//   return idc_.map((photoId: string) => ({
//     photoId,
//   }));
// }
// export async function getStaticPaths() {
//   const dataAll = await getDataPhotographs();
//   const paths = dataAll.props.images.map((image: ImageProps) => ({
//     params: { photoId: image.idc.toString() },
//   }));

//   return { paths, fallback: false };
// }

async function Page({ params }: Props) {
  var data = await getDataPhotographs();
  var idc = params.photoId;
  return (
    <div>
      <ModalSwiper images={data.props.images} idc={idc} show={false} />
    </div>
  );
}
export default Page;

// :TODO: need to add a 404 page for when the photoId is not found
// :TODO: need to check if I can navigate to the next photoId and previous photoId using the URL
