import ModalSwiper from "@/components/swiper/modal-swiper";
import Modal from "@/components/ui/Modal/modal";
import { getAnAsset, getDataPhotographs } from "@/utils/contentful-fetches";
import { ImageProps } from "@/utils/types";
import { Metadata, ResolvingMetadata } from "next";
// import { ImageProps } from "@/utils/types";
// import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = { params: { photoId: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { photoId } = params;
  const data = await getAnAsset(photoId);

  return {
    title: `Photograph | ${data.alt}`,
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
  // export default async function Page({ params }: { params: Props }) {
  // const { photoId } = params;
  // const data = await getAnAsset(photoId);
  var dataAll = await getDataPhotographs();
  var idc = params.photoId;

  // const currentImage = data;
  return (
    <Modal>
      <ModalSwiper images={dataAll.props.images} idc={idc} show={false} />
    </Modal>
  );
  return (
    <Modal>
      <ModalSwiper images={dataAll.props.images} idc={idc} show={true} />
      {/* <div className="relative z-50 flex aspect-auto w-full max-w-7xl items-center wide:h-full xl:taller-than-854:h-auto"> */}
      {/* <div className=" relative z-50 inset-0 mx-auto flex max-w-7xl items-center justify-center">
        <div className="w-full flex flex-col relative z-50">
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
            />
          </div>
        </div>
      </div> */}
    </Modal>
  );
}

export default Page;

// :TODO: need to figure out how to manage the modal transitions from photo to photo. (maybe that is not needed - Not sure)
// :TODO: The image feels like is not taking the full space possible => Might need to fix later
