import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../../cloudinary-image";
import { ChapterSelect } from "../../chapter-select";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const chapterName: {
  key: number;
  slug: string;
  name: string;
}[] = [
  { key: 1, slug: "one", name: "One" },
  { key: 2, slug: "two", name: "Two" },
];
const chapNames = Object.entries(chapterName);
export type chapterImages = {
  public_id: string;
  tags: string[];
};

function NavButton({
  numb,
  slug,
  name,
}: {
  numb: number;
  slug: string;
  name: string;
}) {
  if (numb) {
    return (
      <Button asChild>
        <Link href={slug}>{name}</Link>
      </Button>
    );
  }
  return <div></div>;
}

export default async function WebtoonChapterPage({
  params,
}: {
  params: { chapterSlug: string; webtoonSlug: string };
}) {
  const results = (await cloudinary.v2.search
    .expression(
      `folder: "webtoons/from-jae-to-eaj/${params.chapterSlug}/*"` // folder path
    )
    .max_results(30)
    .sort_by("public_id", "asc") // make sure it's in order. public_id is the title of each image
    .with_field("tags")
    .execute()) as {
    resources: chapterImages[];
  };
  const chapSlug = params.chapterSlug;
  let chapterData =
    (chapterName.find((chapter) => chapter.slug == chapSlug) as {
      key: number;
      slug: string;
      name: string;
    }) || {};
  // console.log(chapterData.key + 1);
  let prevChapterData =
    (chapterName.find((chapter) => chapter.key == chapterData.key - 1) as {
      key: number;
      slug: string;
      name: string;
    }) || {};
  let nextChapterData =
    (chapterName.find((chapter) => chapter.key == chapterData.key + 1) as {
      key: number;
      slug: string;
      name: string;
    }) || {};
  // console.log(chapterName[2]);
  // if (results.resources.length === 0) {
  //   return notFound();
  // }

  return (
    <div className="space-y-4">
      <div className="flex justify-between space-x-2">
        <ChapterSelect
          initialChapter={chapterData.name}
          chapterName={chapterName}
        />
        <div className="flex space-x-2">
          <NavButton
            numb={prevChapterData.key}
            slug={"./" + prevChapterData.slug}
            name="PREV"
          />
          <NavButton
            numb={nextChapterData.key}
            slug={"./" + nextChapterData.slug}
            name="NEXT"
          />
        </div>
      </div>
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
      <div className="flex space-x-2 justify-between">
        <NavButton
          numb={prevChapterData.key}
          slug={"./" + prevChapterData.slug}
          name="PREV"
        />
        <ChapterSelect
          initialChapter={chapterData.name}
          chapterName={chapterName}
        />
        <NavButton
          numb={nextChapterData.key}
          slug={"./" + nextChapterData.slug}
          name="NEXT"
        />
      </div>
    </div>
  );
}
