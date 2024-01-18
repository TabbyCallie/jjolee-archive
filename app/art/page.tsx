import cloudinary from "cloudinary";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CloudinaryImage } from "../cloudinary-image";
import { ModeToggle } from "@/components/ui/mode-toggle";

export type searchResult = {
  public_id: string;
  tags: string[];
};

export default async function WebtoonChapterPage() {
  const results = (await cloudinary.v2.search
    .expression(
      `folder: "art/*"` // folder path
    )
    .max_results(200)
    .sort_by("public_id", "asc") // make sure it's in order. public_id is the title of each image
    .with_field("tags")
    .execute()) as {
    resources: searchResult[];
  };
  // cloudinary.v2.api.delete_folder("/webtoons").then(console.log);

  console.log(results);
  // const metadata = cloudinary.v2.api
  //   .list_metadata_fields(options)
  //   .then(callback);

  return (
    <div>
      <div className="">
        {results.resources.map((result) => (
          <CloudinaryImage
            key={result.public_id}
            imagedata={result}
            width="400"
            height="400"
            alt="an image of something"
          />
        ))}
      </div>
    </div>
  );
}
