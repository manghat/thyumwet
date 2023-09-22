import { Header } from "@/components/ui/header-on-page";
import { getASeries, getAnAsset } from "@/utils/contentful-fetches";
import Image from "next/image";

type Props = { params: { seriesId: string } };

async function Page({ params }: Props) {
  const { seriesId } = params;
  const data = await getASeries(seriesId);
  let x = await JSON.stringify(data.images);
  return (
    <>
      <Header
        title={data.reducedResults.seriesTitle}
        subtitle={data.reducedResults.description}
      />
      <section className="py-24 md:mx-1 justify-self-center ">
        {data.images.props.images.map((image: any, index: number) => (
          <div
            className={`flex items-center justify-between md:px-24 pt-24 py-1 text-2xl tracking-tight transition-colors text-muted-foreground ${
              index % 2 ? "flex-row-reverse" : ""
            }`}
            key={image.id}
          >
            <h2 className="mx-auto mb-5">{image.alt}</h2>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              quality={100}
              className="max-h-[85vh] aspect-auto w-auto"
              sizes="100vh"
              blurDataURL={image.blurDataURL}
              placeholder="blur"
              priority
            />
          </div>
        ))}
      </section>
      {/* <div className="container flex flex-col my-10">
        <div className="flex justify-center">{x}</div>
      </div> */}
    </>
  );
}

export default Page;
