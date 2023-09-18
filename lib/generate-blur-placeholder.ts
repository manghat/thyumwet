import { getPlaiceholder } from "plaiceholder";
import type { ImageProps } from '../utils/types'

const cache = new Map<ImageProps, string>()

export default async function getBase64ImageUrl(
  image:any
): Promise<string> {
  let url = cache.get(image)
  if (url) {
    return url
  }
  
  const blurDataURL = new URL(`https:${image}`);
  blurDataURL.searchParams.set("fm", "jpg");
  blurDataURL.searchParams.set("w", "100");
  blurDataURL.searchParams.set("q", "30");

  
  const buffer = await fetch(blurDataURL).then(async (res) =>
  Buffer.from(await res.arrayBuffer())
  );
  
  const { base64 } = await getPlaiceholder(buffer);
  return base64

}