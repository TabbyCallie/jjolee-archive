"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
import { SearchResult } from "@/app/page";

export function CloudinaryImage(
  props: {
    imagedata: SearchResult;
  } & Omit<CldImageProps, "src">
) {
  const { imagedata } = props;
  return <CldImage {...props} src={imagedata.public_id} />;
}
