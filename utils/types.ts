/* eslint-disable no-unused-vars */
export type chapterFormat = {
  key: number;
  chapslug: string;
  chapname: string;
};
export type webtoonFormat = {
  key: number;
  slug: string;
  name: string;
  img: string;
  chapters: chapterFormat[];
};
export type webtoonFormatExt = webtoonFormat & {
  description: string;
  webtoonLink: string;
  nb?: string;
};

/* from nextjs-image-gallery */
export interface ImageProps {
  id: number;
  height: string;
  width: string;
  public_id: string;
  format: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
