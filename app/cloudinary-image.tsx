"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
export type SearchResult = {
  public_id: string;
  tags: string[];
};
export function CloudinaryImage(
  props: {
    imagedata: SearchResult;
  } & Omit<CldImageProps, "src">
) {
  const { imagedata } = props;
  return <CldImage {...props} src={imagedata.public_id} />;
}
