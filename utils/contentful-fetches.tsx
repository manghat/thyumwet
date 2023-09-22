import getBase64ImageUrl from "@/lib/generate-blur-placeholder";
import { client } from "./contentful-client";
import GetImageDetils from "./get-image-details";
import { ImageProps, ImageSeriesProps } from "./types";

export async function getDataPhotographs() {
  // "use server";
  const results = await client.getEntries({
    content_type: "photograph",
    order: "-sys.updatedAt",
  });
  if (!results.items) {
    throw new Error("Failed to fetch data");
  }
  if (!results.items) {
    console.log(results);
    throw new Error("Failed to fetch data");
  }
  return ReduceImages(results);
}

function ReduceImages(results: any) {
  let reducedResults: ImageProps[] = [];
  let i = 0;
  for (let result of results.items) {
    reducedResults.push({
      id: i,
      idc: result.sys.id,
      height: result.fields.photo[0].fields.file.details.image.height,
      src: result.fields.photo[0].fields.file.url,
      width: result.fields.photo[0].fields.file.details.image.width,
      placeholder: result.fields.photoTitle,
      alt: result.fields.photoTitle,
      date: result.fields.date,
      blurDataURL: undefined,
    });
    i++;
  }
  return GetImageDetils(reducedResults);
}

export async function getAPhoto(id: string) {
  const result = await client.getAsset(id);
  if (!result) {
    throw new Error("Failed to fetch data");
  }
  let reducedResults = {
    id: 0,
    idc: result.sys.id,
    height: result.fields.file.details.image.height,
    src: result.fields.file.url,
    width: result.fields.file.details.image.width,
    blurDataURL: "",
    alt: "Ashwin Mangaht",
  };
  reducedResults.blurDataURL = await getBase64ImageUrl(result.fields.file.url);

  return reducedResults;
}

export async function getAnAsset(entity_id: string) {
  const result = await client.getEntry(entity_id);
  if (!result) {
    throw new Error("Failed to fetch data");
  }
  // return result;
  let reducedResults = {
    id: 0,
    idc: result.sys.id,
    height: result.fields.photo[0].fields.file.details.image.height,
    src: result.fields.photo[0].fields.file.url,
    width: result.fields.photo[0].fields.file.details.image.width,
    blurDataURL: "",
    alt: result.fields.photoTitle,
  };
  reducedResults.blurDataURL = await getBase64ImageUrl(reducedResults.src);
  return reducedResults;
}

export async function getPhotoSeries() {
  const results = await client.getEntries({
    content_type: "photographySeries",
    order: "-sys.createdAt",
  });
  if (!results.items) {
    throw new Error("Failed to fetch data");
  }
  let reducedResults: ImageSeriesProps[] = [];
  let i = 0;
  for (let result of results.items) {
    reducedResults.push({
      id: i,
      idc: result.sys.id,
      src: result.fields.coverImage.fields.file.url,
      placeholder: result.fields.seriesTitle,
      description: result.fields.description,
      seriesTitle: result.fields.seriesTitle,
      blurDataURL: undefined,
      alt: "",
      date: "",
    });
    i++;
  }
  // console.log(results.items);
  return GetImageDetils(reducedResults);
}

export async function getASeries(id: string) {
  const result = await client.getEntry(id);
  // console.log(result);
  if (!result) {
    throw new Error("Failed to fetch data");
  }
  let photos = result.fields.photos;
  // console.log(photos);

  let reducedResults: ImageSeriesProps = {
    idc: result.sys.id,
    seriesTitle: result.fields.seriesTitle,
    description: result.fields.description,
    id: 0,
    blurDataURL: undefined,
    src: "",
    alt: "",
    date: "",
  };
  let images = await ReduceImages({ items: photos });
  // console.log("test : ", images?.props.images);
  return { reducedResults, images };
}
