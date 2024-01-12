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
  { key: 1, slug: "prologue", name: "Prologue" },
  { key: 2, slug: "episode-1", name: "Episode 1" },
  { key: 3, slug: "episode-2", name: "Episode 2" },
  { key: 4, slug: "episode-3", name: "Episode 3" },
  { key: 5, slug: "episode-4", name: "Episode 4" },
  { key: 6, slug: "episode-5", name: "Episode 5" },
  { key: 7, slug: "episode-6", name: "Episode 6" },
  { key: 8, slug: "episode-7", name: "Episode 7" },
  { key: 9, slug: "episode-8", name: "Episode 8" },
  { key: 10, slug: "episode-9", name: "Episode 9" },
  { key: 11, slug: "episode-10", name: "Episode 10" },
  { key: 12, slug: "episode-11", name: "Episode 11" },
  { key: 13, slug: "episode-12", name: "Episode 12" },
  { key: 14, slug: "episode-13", name: "Episode 13" },
  { key: 15, slug: "episode-14", name: "Episode 14" },
  { key: 16, slug: "episode-15", name: "Episode 15" },
  { key: 17, slug: "episode-16", name: "Episode 16" },
  { key: 18, slug: "episode-17", name: "Episode 17" },
  { key: 19, slug: "episode-18", name: "Episode 18" },
  { key: 20, slug: "episode-19", name: "Episode 19" },
  { key: 21, slug: "episode-20", name: "Episode 20" },
  { key: 22, slug: "episode-21", name: "Episode 21" },
  { key: 23, slug: "episode-22", name: "Episode 22" },
  { key: 24, slug: "episode-23", name: "Episode 23" },
  { key: 25, slug: "episode-24", name: "Episode 24" },
  { key: 26, slug: "episode-25", name: "Episode 25" },
  { key: 27, slug: "episode-26", name: "Episode 26" },
  { key: 28, slug: "episode-27", name: "Episode 27" },
  { key: 29, slug: "episode-28", name: "Episode 28" },
  { key: 30, slug: "episode-29", name: "Episode 29" },
  { key: 31, slug: "episode-30", name: "Episode 30" },
  { key: 32, slug: "episode-31", name: "Episode 31" },
  { key: 33, slug: "episode-32", name: "Episode 32" },
  { key: 34, slug: "episode-33", name: "Episode 33" },
  { key: 35, slug: "episode-34", name: "Episode 34" },
  { key: 36, slug: "episode-35", name: "Episode 35" },
  { key: 37, slug: "episode-36", name: "Episode 36" },
  { key: 38, slug: "episode-37", name: "Episode 37" },
  { key: 39, slug: "episode-38", name: "Episode 38" },
  { key: 40, slug: "episode-39", name: "Episode 39" },
  { key: 41, slug: "episode-40", name: "Episode 40" },
  { key: 42, slug: "episode-41", name: "Episode 41" },
  { key: 43, slug: "episode-42", name: "Episode 42" },
  { key: 44, slug: "episode-43", name: "Episode 43" },
  { key: 45, slug: "episode-44", name: "Episode 44" },
  { key: 46, slug: "episode-45", name: "Episode 45" },
  { key: 47, slug: "episode-46", name: "Episode 46" },
  {
    key: 48,
    slug: "be-the-change-mv-making-film",
    name: "Be The Change MV Making Film",
  },
  { key: 49, slug: "episode-47", name: "Episode 47" },
  { key: 50, slug: "episode-48", name: "Episode 48" },
  { key: 51, slug: "episode-49", name: "Episode 49" },
  { key: 52, slug: "episode-50", name: "Episode 50" },
  { key: 53, slug: "episode-51", name: "Episode 51" },
  { key: 54, slug: "episode-52", name: "Episode 52" },
  { key: 55, slug: "episode-53", name: "Episode 53" },
  { key: 56, slug: "episode-54", name: "Episode 54" },
  { key: 57, slug: "episode-55", name: "Episode 55" },
  { key: 58, slug: "episode-56", name: "Episode 56" },
  { key: 59, slug: "episode-57", name: "Episode 57" },
  { key: 60, slug: "episode-58", name: "Episode 58" },
  { key: 61, slug: "episode-59", name: "Episode 59" },
  { key: 62, slug: "episode-60", name: "Episode 60" },
  { key: 63, slug: "episode-61", name: "Episode 61" },
  { key: 64, slug: "episode-62", name: "Episode 62" },
  { key: 65, slug: "episode-63", name: "Episode 63" },
  { key: 66, slug: "episode-64", name: "Episode 64" },
  { key: 67, slug: "episode-65", name: "Episode 65" },
  { key: 68, slug: "episode-66", name: "Episode 66" },
  { key: 69, slug: "episode-67", name: "Episode 67" },
  { key: 70, slug: "episode-68", name: "Episode 68" },
  { key: 71, slug: "episode-69", name: "Episode 69" },
  { key: 72, slug: "episode-70", name: "Episode 70" },
  { key: 73, slug: "episode-71", name: "Episode 71" },
  { key: 74, slug: "episode-72", name: "Episode 72" },
  { key: 75, slug: "episode-73", name: "Episode 73" },
  { key: 76, slug: "episode-74", name: "Episode 74" },
  { key: 77, slug: "episode-75", name: "Episode 75" },
  { key: 78, slug: "episode-76", name: "Episode 76" },
  { key: 79, slug: "episode-77", name: "Episode 77" },
  { key: 80, slug: "episode-78", name: "Episode 78" },
  { key: 81, slug: "episode-79", name: "Episode 79" },
  { key: 82, slug: "episode-80", name: "Episode 80" },
  { key: 83, slug: "episode-81", name: "Episode 81" },
  { key: 84, slug: "episode-82", name: "Episode 82" },
  { key: 85, slug: "episode-83", name: "Episode 83" },
  { key: 86, slug: "episode-84", name: "Episode 84" },
  { key: 87, slug: "episode-85", name: "Episode 85" },
  { key: 88, slug: "episode-86", name: "Episode 86" },
  { key: 89, slug: "episode-87", name: "Episode 87" },
  { key: 90, slug: "episode-88", name: "Episode 88" },
  { key: 91, slug: "episode-89", name: "Episode 89" },
  { key: 92, slug: "episode-90", name: "Episode 90" },
  { key: 93, slug: "episode-91", name: "Episode 91" },
  { key: 94, slug: "episode-92", name: "Episode 92" },
  { key: 95, slug: "episode-93", name: "Episode 93" },
  { key: 96, slug: "episode-94", name: "Episode 94" },
  { key: 97, slug: "episode-95", name: "Episode 95" },
  { key: 98, slug: "episode-96", name: "Episode 96" },
  { key: 99, slug: "episode-97", name: "Episode 97" },
  { key: 100, slug: "episode-98", name: "Episode 98" },
  { key: 101, slug: "episode-99", name: "Episode 99" },
  { key: 102, slug: "episode-100", name: "Episode 100" },
  { key: 103, slug: "episode-101", name: "Episode 101" },
  { key: 104, slug: "episode-102", name: "Episode 102" },
  { key: 105, slug: "episode-103", name: "Episode 103" },
  { key: 106, slug: "episode-104", name: "Episode 104" },
  { key: 107, slug: "episode-105", name: "Episode 105" },
  { key: 108, slug: "episode-106", name: "Episode 106" },
  { key: 109, slug: "episode-107", name: "Episode 107" },
  { key: 110, slug: "episode-108", name: "Episode 108" },
  { key: 111, slug: "episode-109", name: "Episode 109" },
  { key: 112, slug: "episode-110", name: "Episode 110" },
  { key: 113, slug: "episode-111", name: "Episode 111" },
  { key: 114, slug: "episode-112", name: "Episode 112" },
  { key: 115, slug: "episode-113", name: "Episode 113" },
  { key: 116, slug: "episode-114", name: "Episode 114" },
  { key: 117, slug: "episode-115", name: "Episode 115" },
  { key: 118, slug: "episode-116", name: "Episode 116" },
  { key: 119, slug: "episode-117", name: "Episode 117" },
  { key: 120, slug: "episode-118", name: "Episode 118" },
  { key: 121, slug: "episode-119", name: "Episode 119" },
  { key: 122, slug: "episode-120", name: "Episode 120" },
  { key: 123, slug: "episode-121", name: "Episode 121" },
  { key: 124, slug: "episode-122", name: "Episode 122" },
  { key: 125, slug: "episode-123", name: "Episode 123" },
  { key: 126, slug: "episode-124", name: "Episode 124" },
  { key: 127, slug: "episode-125", name: "Episode 125" },
  { key: 128, slug: "episode-126", name: "Episode 126" },
  { key: 129, slug: "episode-127", name: "Episode 127" },
  { key: 130, slug: "episode-128", name: "Episode 128" },
  { key: 131, slug: "episode-129", name: "Episode 129" },
  { key: 132, slug: "episode-130", name: "Episode 130" },
  { key: 133, slug: "episode-131", name: "Episode 131" },
  { key: 134, slug: "episode-132", name: "Episode 132" },
  { key: 135, slug: "episode-133", name: "Episode 133" },
  { key: 136, slug: "episode-134", name: "Episode 134" },
  { key: 137, slug: "episode-135", name: "Episode 135" },
  { key: 138, slug: "episode-136", name: "Episode 136" },
  { key: 139, slug: "episode-137", name: "Episode 137" },
  { key: 140, slug: "episode-138", name: "Episode 138" },
  { key: 141, slug: "episode-139", name: "Episode 139" },
  { key: 142, slug: "episode-140", name: "Episode 140" },
  { key: 143, slug: "episode-141", name: "Episode 141" },
  { key: 144, slug: "episode-142", name: "Episode 142" },
  { key: 145, slug: "episode-143", name: "Episode 143" },
  { key: 146, slug: "episode-144", name: "Episode 144" },
  { key: 147, slug: "episode-145", name: "Episode 145" },
  { key: 148, slug: "episode-146", name: "Episode 146" },
  { key: 149, slug: "episode-147", name: "Episode 147" },
  { key: 150, slug: "episode-148", name: "Episode 148" },
  { key: 151, slug: "episode-149", name: "Episode 149" },
  { key: 152, slug: "episode-150", name: "Episode 150" },
  { key: 153, slug: "episode-151", name: "Episode 151" },
  { key: 154, slug: "episode-152", name: "Episode 152" },
  { key: 155, slug: "episode-153", name: "Episode 153" },
  { key: 156, slug: "episode-154", name: "Episode 154" },
  { key: 157, slug: "episode-155", name: "Episode 155" },
  { key: 158, slug: "episode-156", name: "Episode 156" },
  { key: 159, slug: "episode-157", name: "Episode 157" },
  { key: 160, slug: "episode-158", name: "Episode 158" },
  { key: 161, slug: "episode-159", name: "Episode 159" },
  { key: 162, slug: "episode-160", name: "Episode 160" },
  { key: 163, slug: "episode-161", name: "Episode 161" },
  { key: 164, slug: "episode-162", name: "Episode 162" },
  { key: 165, slug: "episode-163", name: "Episode 163" },
  { key: 166, slug: "episode-164", name: "Episode 164" },
  { key: 167, slug: "episode-165", name: "Episode 165" },
  { key: 168, slug: "episode-166", name: "Episode 166" },
  { key: 169, slug: "episode-167", name: "Episode 167" },
  { key: 170, slug: "episode-168", name: "Episode 168" },
  { key: 171, slug: "episode-169", name: "Episode 169" },
  { key: 172, slug: "episode-170", name: "Episode 170" },
  { key: 173, slug: "episode-171", name: "Episode 171" },
  { key: 174, slug: "episode-172", name: "Episode 172" },
  { key: 175, slug: "episode-173", name: "Episode 173" },
  { key: 176, slug: "episode-174", name: "Episode 174" },
  { key: 177, slug: "episode-175", name: "Episode 175" },
  { key: 178, slug: "episode-176", name: "Episode 176" },
  { key: 179, slug: "episode-177", name: "Episode 177" },
  { key: 180, slug: "episode-178", name: "Episode 178" },
  { key: 181, slug: "episode-179", name: "Episode 179" },
  { key: 182, slug: "episode-180", name: "Episode 180" },
  { key: 183, slug: "episode-181", name: "Episode 181" },
  { key: 184, slug: "episode-182", name: "Episode 182" },
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
      `folder: "webtoons/lost-in-translation/${params.chapterSlug}/*"` // folder path
    )
    .max_results(200)
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
