import { Header } from "@/components/ui/header-on-page";
import { getASeries, getAnAsset } from "@/utils/contentful-fetches";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";

type Props = { params: { seriesId: string } };

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { seriesId } = params;
  const data = await getASeries(seriesId);

  return {
    title: `Photo Series | ${data.reducedResults.seriesTitle}`,
    description: data.reducedResults.description,
  };
}

async function Page({ params }: Props) {
  const { seriesId } = params;
  const data = await getASeries(seriesId);
  // let x = await JSON.stringify(data.images);
  return (
    <>
      <Header
        title={data.reducedResults.seriesTitle}
        subtitle={data.reducedResults.description}
      />
      <section className="py-24 md:mx-1 justify-self-center ">
        {data.images.props.images.map((image: any, index: number) => (
          <div
            className={`flex flex-col items-center justify-between md:px-24 pt-24 py-1 text-2xl tracking-tight transition-colors text-muted-foreground ${
              // index % 2 ? "md:flex-row-reverse" : ""
              ""
            }`}
            key={image.id}
          >
            {/* <h2 className="mx-auto mb-5">{image.alt}</h2> */}
            {/* <div className="md:hidden text-center mx-2">
              <p className="text-sm md:text-xl md:text-muted-foreground group-hover:opacity-100 line-clamp-2">
                {image.alt} <br /> {image.date}
              </p>
            </div> */}
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
            <div className="md:block md:p-6 max-w-2xl min-w-lg py-4">
              <p className="text-sm md:text-xl text-center text-foreground-muted md:text-muted-foreground line-clamp-3">
                {image.alt} <br />
                {image.date && <span className="text-xs">{image.date}</span>}
              </p>
            </div>
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
