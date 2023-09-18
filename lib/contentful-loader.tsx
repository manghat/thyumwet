// Docs: https://www.contentful.com/developers/docs/references/images-api/
"use client";
import { ImageLoaderProps } from "next/image";

export default function contentfulLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  const url = new URL(`https:${src}`);
  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width.toString());
  url.searchParams.set("q", (quality || 75).toString());
  url.searchParams.set("fit", "fill");

  return url.href;
}
