import { client } from "./contentful-client";
import GetImageDetils from "./get-image-details";
import { ImageProps } from "./types";

export async function getDataPhoto() {
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
