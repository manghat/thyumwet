import { getAnAsset } from "@/utils/contentful-fetches";
import React from "react";

type Props = {};

const Page = async (props: Props) => {
  const data = await getAnAsset("1DRfrRxwvf3JuTNfXujF6m");
  console.log("asset : ", data);
  return;
};

export default Page;
