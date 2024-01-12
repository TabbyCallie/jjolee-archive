import cloudinary from "cloudinary";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { CloudinaryImage } from "./cloudinary-image";
export type SearchResult = {
  public_id: string;
  tags: string[];
};
export default async function Home() {
  const results = (await cloudinary.v2.search
    .expression(
      `folder: "lost in translation/webtoon/005 Episode 4/*"` // add your folder
      // "resource_type:image"
    )
    .sort_by("public_id", "asc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };
  console.log(results);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="">
        {results.resources.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            imagedata={result}
            width="800"
            height="1280"
            alt="an image of something"
          />
        ))}
      </div>
    </main>
  );
}
