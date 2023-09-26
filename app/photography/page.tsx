import ImageContainer from "@/components/image-container";
import AnimationWrapper from "@/components/ui/animation-wrapper";
import { Header } from "@/components/ui/header-on-page";
import { getDataPhotographs } from "@/utils/contentful-fetches";
import { ImageProps } from "@/utils/types";
import { Metadata } from "next";
import Image from "next/image";

type Props = {};

export const metadata: Metadata = {
  title: "Photography",
  description:
    "A moment in time and space, captured and rendered for its perceived beauty.",
};

export default async function Page({}: Props) {
  const data = await getDataPhotographs();
  return (
    <AnimationWrapper>
      <div>
        <Header
          title="Photography"
          subtitle="A moment in time and space, captured and rendered for its perceived beauty."
        />
        <section className="grid md:grid-cols-gallery auto-rows-[5px] py-24 md:mx-1">
          {data.props.images.map((image: ImageProps, index: number) => (
            <ImageContainer key={index} image={image} index={index} href={""} />
          ))}
        </section>
      </div>
    </AnimationWrapper>
  );
}
