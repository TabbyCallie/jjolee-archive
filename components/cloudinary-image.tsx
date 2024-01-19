"use client";

import { CldImage, CldImageProps } from "next-cloudinary";
export type SearchResult = {
  public_id: string;
  tags: string[];
  metadata: { caption: string; post_date: string; platform: string };
};
export function CloudinaryImage(
  props: {
    imagedata: SearchResult;
  } & Omit<CldImageProps, "src">
) {
  const { imagedata } = props;
  console.log(imagedata.metadata);
  return <CldImage {...props} src={imagedata.public_id} />;
}
