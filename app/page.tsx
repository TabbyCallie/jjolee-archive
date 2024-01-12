import cloudinary from "cloudinary";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { CloudinaryImage } from "./cloudinary-image";
import Link from "next/link";
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
    <main className="space-y-8">
      <div className="text-lg">This website is a work in progress!!</div>
      <div>
        Read archived webtoons!
        <ul className="list-inside list-disc">
          <li>
            <Link href="/webtoon/lost-in-translation/prologue">
              Prologue of Lost in Translation
            </Link>
          </li>
          <li>
            <Link href="/webtoon/from-jae-to-eaj/one">
              Part One of From Jae to Eaj
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
