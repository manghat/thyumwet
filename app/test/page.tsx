import { getAnAsset } from "@/utils/contentful-fetches";
import Image from "next/image";
type Props = {};

const Page = async (props: Props) => {
  const data = await getAnAsset("1DRfrRxwvf3JuTNfXujF6m");
  const json = await JSON.stringify(data);

  return (
    <div className="relative z-50 inset-0 mx-auto flex max-w-7xl items-center justify-center">
      <div className="w-full flex flex-col relative z-50">
        <Image
          src={data.src}
          width={data.width}
          height={data.height}
          quality={100}
          className="max-h-[85vh] aspect-auto w-auto"
          sizes="100vh"
          blurDataURL={data.blurDataURL}
          placeholder="blur"
          priority
          alt={data.alt}
        />
      </div>
    </div>
  );
};

export default Page;
