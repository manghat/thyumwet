import getBase64ImageUrl from "../lib/generate-blur-placeholder";


const GetImageDetils = async (reducedResults ) => {
  const blurImagePromises = reducedResults.map((image) => {
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