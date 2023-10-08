// unused file
import getBase64ImageUrl from "../lib/generate-blur-placeholder";
import { ImageProps } from "./types";


const GetImageDetils = async (reducedResults : any) => {
  const blurImagePromises = reducedResults.map((image : any) => {
    return getBase64ImageUrl(image.src);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataURL = imagesWithBlurDataUrls[i];
  }
  return {
    props: {
      images: reducedResults,
    },
  };

}

export default GetImageDetils