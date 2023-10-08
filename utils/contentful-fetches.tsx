import getBase64ImageUrl from "@/lib/generate-blur-placeholder";
import { client } from "./contentful-client";
import GetImageDetils from "./get-image-details";
import { ImageProps, ImageSeriesProps } from "./types";

async function ReduceImages(results: any) {
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
      blurDataURL: await getBase64ImageUrl(
        result.fields.photo[0].fields.file.url
      ),
    });
    i++;
  }
  return {
    props: {
      images: reducedResults,
    },
  };
  return GetImageDetils(reducedResults);
}

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

//creates a slug from the title

var slug = function (str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  var to = "aaaaaeeeeeiiiiooooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
};

// :TODO: have not tested slug functionality for slugs that are not defined.

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
    let photos = result.fields.photos;
    let images = await ReduceImages({ items: photos });
    reducedResults.push({
      id: i,
      idc: result.sys.id,
      slug: result.fields.slug
        ? slug(result.fields.slug)
        : slug(result.fields.seriesTitle),
      src: result.fields.coverImage.fields.file.url,
      placeholder: result.fields.seriesTitle,
      description: result.fields.description,
      seriesTitle: result.fields.seriesTitle,
      blurDataURL: undefined,
      alt: "",
      date: "",
      images: images.props.images,
    });
    i++;
  }
  // console.log(results.items);
  return GetImageDetils(reducedResults);
}

// :TODO: this is not used anywhere maybe delete it later
export async function getASeries(id: string) {
  const result = await client.getEntry(id);
  // console.log(result);
  if (!result) {
    throw new Error("Failed to fetch data");
  }
  let photos = result.fields.photos;
  // console.log(photos);

  let slug_ = result.fields.slug
    ? slug(result.fields.slug)
    : slug(result.fields.seriesTitle);

  let reducedResults: ImageSeriesProps = {
    idc: result.sys.id,
    slug: slug_,
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
