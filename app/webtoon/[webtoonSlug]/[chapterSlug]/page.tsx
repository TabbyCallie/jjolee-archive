import ImageKit from "imagekit";
import { ChapterSelect } from "@/components/chapter-select";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import type { webtoonFormat, chapterFormat } from "@/utils/types";

const webtoonName: webtoonFormat[] = [
  {
    key: 1,
    slug: "lost-in-translation",
    name: "Lost in Translation",
    img: "/lost-in-translation.jpg",
    chapters: [
      { key: 1, chapslug: "prologue", chapname: "Prologue" },
      { key: 2, chapslug: "episode-1", chapname: "Episode 1" },
      { key: 3, chapslug: "episode-2", chapname: "Episode 2" },
      { key: 4, chapslug: "episode-3", chapname: "Episode 3" },
      { key: 5, chapslug: "episode-4", chapname: "Episode 4" },
      { key: 6, chapslug: "episode-5", chapname: "Episode 5" },
      { key: 7, chapslug: "episode-6", chapname: "Episode 6" },
      { key: 8, chapslug: "episode-7", chapname: "Episode 7" },
      { key: 9, chapslug: "episode-8", chapname: "Episode 8" },
      { key: 10, chapslug: "episode-9", chapname: "Episode 9" },
      { key: 11, chapslug: "episode-10", chapname: "Episode 10" },
      { key: 12, chapslug: "episode-11", chapname: "Episode 11" },
      { key: 13, chapslug: "episode-12", chapname: "Episode 12" },
      { key: 14, chapslug: "episode-13", chapname: "Episode 13" },
      { key: 15, chapslug: "episode-14", chapname: "Episode 14" },
      { key: 16, chapslug: "episode-15", chapname: "Episode 15" },
      { key: 17, chapslug: "episode-16", chapname: "Episode 16" },
      { key: 18, chapslug: "episode-17", chapname: "Episode 17" },
      { key: 19, chapslug: "episode-18", chapname: "Episode 18" },
      { key: 20, chapslug: "episode-19", chapname: "Episode 19" },
      { key: 21, chapslug: "episode-20", chapname: "Episode 20" },
      { key: 22, chapslug: "episode-21", chapname: "Episode 21" },
      { key: 23, chapslug: "episode-22", chapname: "Episode 22" },
      { key: 24, chapslug: "episode-23", chapname: "Episode 23" },
      { key: 25, chapslug: "episode-24", chapname: "Episode 24" },
      { key: 26, chapslug: "episode-25", chapname: "Episode 25" },
      { key: 27, chapslug: "episode-26", chapname: "Episode 26" },
      { key: 28, chapslug: "episode-27", chapname: "Episode 27" },
      { key: 29, chapslug: "episode-28", chapname: "Episode 28" },
      { key: 30, chapslug: "episode-29", chapname: "Episode 29" },
      { key: 31, chapslug: "episode-30", chapname: "Episode 30" },
      { key: 32, chapslug: "episode-31", chapname: "Episode 31" },
      { key: 33, chapslug: "episode-32", chapname: "Episode 32" },
      { key: 34, chapslug: "episode-33", chapname: "Episode 33" },
      { key: 35, chapslug: "episode-34", chapname: "Episode 34" },
      { key: 36, chapslug: "episode-35", chapname: "Episode 35" },
      { key: 37, chapslug: "episode-36", chapname: "Episode 36" },
      { key: 38, chapslug: "episode-37", chapname: "Episode 37" },
      { key: 39, chapslug: "episode-38", chapname: "Episode 38" },
      { key: 40, chapslug: "episode-39", chapname: "Episode 39" },
      { key: 41, chapslug: "episode-40", chapname: "Episode 40" },
      { key: 42, chapslug: "episode-41", chapname: "Episode 41" },
      { key: 43, chapslug: "episode-42", chapname: "Episode 42" },
      { key: 44, chapslug: "episode-43", chapname: "Episode 43" },
      { key: 45, chapslug: "episode-44", chapname: "Episode 44" },
      { key: 46, chapslug: "episode-45", chapname: "Episode 45" },
      { key: 47, chapslug: "episode-46", chapname: "Episode 46" },
      {
        key: 48,
        chapslug: "be-the-change-mv-making-film",
        chapname: "Be The Change MV Making Film",
      },
      { key: 49, chapslug: "episode-47", chapname: "Episode 47" },
      { key: 50, chapslug: "episode-48", chapname: "Episode 48" },
      { key: 51, chapslug: "episode-49", chapname: "Episode 49" },
      { key: 52, chapslug: "episode-50", chapname: "Episode 50" },
      { key: 53, chapslug: "episode-51", chapname: "Episode 51" },
      { key: 54, chapslug: "episode-52", chapname: "Episode 52" },
      { key: 55, chapslug: "episode-53", chapname: "Episode 53" },
      { key: 56, chapslug: "episode-54", chapname: "Episode 54" },
      { key: 57, chapslug: "episode-55", chapname: "Episode 55" },
      { key: 58, chapslug: "episode-56", chapname: "Episode 56" },
      { key: 59, chapslug: "episode-57", chapname: "Episode 57" },
      { key: 60, chapslug: "episode-58", chapname: "Episode 58" },
      { key: 61, chapslug: "episode-59", chapname: "Episode 59" },
      { key: 62, chapslug: "episode-60", chapname: "Episode 60" },
      { key: 63, chapslug: "episode-61", chapname: "Episode 61" },
      { key: 64, chapslug: "episode-62", chapname: "Episode 62" },
      { key: 65, chapslug: "episode-63", chapname: "Episode 63" },
      { key: 66, chapslug: "episode-64", chapname: "Episode 64" },
      { key: 67, chapslug: "episode-65", chapname: "Episode 65" },
      { key: 68, chapslug: "episode-66", chapname: "Episode 66" },
      { key: 69, chapslug: "episode-67", chapname: "Episode 67" },
      { key: 70, chapslug: "episode-68", chapname: "Episode 68" },
      { key: 71, chapslug: "episode-69", chapname: "Episode 69" },
      { key: 72, chapslug: "episode-70", chapname: "Episode 70" },
      { key: 73, chapslug: "episode-71", chapname: "Episode 71" },
      { key: 74, chapslug: "episode-72", chapname: "Episode 72" },
      { key: 75, chapslug: "episode-73", chapname: "Episode 73" },
      { key: 76, chapslug: "episode-74", chapname: "Episode 74" },
      { key: 77, chapslug: "episode-75", chapname: "Episode 75" },
      { key: 78, chapslug: "episode-76", chapname: "Episode 76" },
      { key: 79, chapslug: "episode-77", chapname: "Episode 77" },
      { key: 80, chapslug: "episode-78", chapname: "Episode 78" },
      { key: 81, chapslug: "episode-79", chapname: "Episode 79" },
      { key: 82, chapslug: "episode-80", chapname: "Episode 80" },
      { key: 83, chapslug: "episode-81", chapname: "Episode 81" },
      { key: 84, chapslug: "episode-82", chapname: "Episode 82" },
      { key: 85, chapslug: "episode-83", chapname: "Episode 83" },
      { key: 86, chapslug: "episode-84", chapname: "Episode 84" },
      { key: 87, chapslug: "episode-85", chapname: "Episode 85" },
      { key: 88, chapslug: "episode-86", chapname: "Episode 86" },
      { key: 89, chapslug: "episode-87", chapname: "Episode 87" },
      { key: 90, chapslug: "episode-88", chapname: "Episode 88" },
      { key: 91, chapslug: "episode-89", chapname: "Episode 89" },
      { key: 92, chapslug: "episode-90", chapname: "Episode 90" },
      { key: 93, chapslug: "episode-91", chapname: "Episode 91" },
      { key: 94, chapslug: "episode-92", chapname: "Episode 92" },
      { key: 95, chapslug: "episode-93", chapname: "Episode 93" },
      { key: 96, chapslug: "episode-94", chapname: "Episode 94" },
      { key: 97, chapslug: "episode-95", chapname: "Episode 95" },
      { key: 98, chapslug: "episode-96", chapname: "Episode 96" },
      { key: 99, chapslug: "episode-97", chapname: "Episode 97" },
      { key: 100, chapslug: "episode-98", chapname: "Episode 98" },
      { key: 101, chapslug: "episode-99", chapname: "Episode 99" },
      { key: 102, chapslug: "episode-100", chapname: "Episode 100" },
      { key: 103, chapslug: "episode-101", chapname: "Episode 101" },
      { key: 104, chapslug: "episode-102", chapname: "Episode 102" },
      { key: 105, chapslug: "episode-103", chapname: "Episode 103" },
      { key: 106, chapslug: "episode-104", chapname: "Episode 104" },
      { key: 107, chapslug: "episode-105", chapname: "Episode 105" },
      { key: 108, chapslug: "episode-106", chapname: "Episode 106" },
      { key: 109, chapslug: "episode-107", chapname: "Episode 107" },
      { key: 110, chapslug: "episode-108", chapname: "Episode 108" },
      { key: 111, chapslug: "episode-109", chapname: "Episode 109" },
      { key: 112, chapslug: "episode-110", chapname: "Episode 110" },
      { key: 113, chapslug: "episode-111", chapname: "Episode 111" },
      { key: 114, chapslug: "episode-112", chapname: "Episode 112" },
      { key: 115, chapslug: "episode-113", chapname: "Episode 113" },
      { key: 116, chapslug: "episode-114", chapname: "Episode 114" },
      { key: 117, chapslug: "episode-115", chapname: "Episode 115" },
      { key: 118, chapslug: "episode-116", chapname: "Episode 116" },
      { key: 119, chapslug: "episode-117", chapname: "Episode 117" },
      { key: 120, chapslug: "episode-118", chapname: "Episode 118" },
      { key: 121, chapslug: "episode-119", chapname: "Episode 119" },
      { key: 122, chapslug: "episode-120", chapname: "Episode 120" },
      { key: 123, chapslug: "episode-121", chapname: "Episode 121" },
      { key: 124, chapslug: "episode-122", chapname: "Episode 122" },
      { key: 125, chapslug: "episode-123", chapname: "Episode 123" },
      { key: 126, chapslug: "episode-124", chapname: "Episode 124" },
      { key: 127, chapslug: "episode-125", chapname: "Episode 125" },
      { key: 128, chapslug: "episode-126", chapname: "Episode 126" },
      { key: 129, chapslug: "episode-127", chapname: "Episode 127" },
      { key: 130, chapslug: "episode-128", chapname: "Episode 128" },
      { key: 131, chapslug: "episode-129", chapname: "Episode 129" },
      { key: 132, chapslug: "episode-130", chapname: "Episode 130" },
      { key: 133, chapslug: "episode-131", chapname: "Episode 131" },
      { key: 134, chapslug: "episode-132", chapname: "Episode 132" },
      { key: 135, chapslug: "episode-133", chapname: "Episode 133" },
      { key: 136, chapslug: "episode-134", chapname: "Episode 134" },
      { key: 137, chapslug: "episode-135", chapname: "Episode 135" },
      { key: 138, chapslug: "episode-136", chapname: "Episode 136" },
      { key: 139, chapslug: "episode-137", chapname: "Episode 137" },
      { key: 140, chapslug: "episode-138", chapname: "Episode 138" },
      { key: 141, chapslug: "episode-139", chapname: "Episode 139" },
      { key: 142, chapslug: "episode-140", chapname: "Episode 140" },
      { key: 143, chapslug: "episode-141", chapname: "Episode 141" },
      { key: 144, chapslug: "episode-142", chapname: "Episode 142" },
      { key: 145, chapslug: "episode-143", chapname: "Episode 143" },
      { key: 146, chapslug: "episode-144", chapname: "Episode 144" },
      { key: 147, chapslug: "episode-145", chapname: "Episode 145" },
      { key: 148, chapslug: "episode-146", chapname: "Episode 146" },
      { key: 149, chapslug: "episode-147", chapname: "Episode 147" },
      { key: 150, chapslug: "episode-148", chapname: "Episode 148" },
      { key: 151, chapslug: "episode-149", chapname: "Episode 149" },
      { key: 152, chapslug: "episode-150", chapname: "Episode 150" },
      { key: 153, chapslug: "episode-151", chapname: "Episode 151" },
      { key: 154, chapslug: "episode-152", chapname: "Episode 152" },
      { key: 155, chapslug: "episode-153", chapname: "Episode 153" },
      { key: 156, chapslug: "episode-154", chapname: "Episode 154" },
      { key: 157, chapslug: "episode-155", chapname: "Episode 155" },
      { key: 158, chapslug: "episode-156", chapname: "Episode 156" },
      { key: 159, chapslug: "episode-157", chapname: "Episode 157" },
      { key: 160, chapslug: "episode-158", chapname: "Episode 158" },
      { key: 161, chapslug: "episode-159", chapname: "Episode 159" },
      { key: 162, chapslug: "episode-160", chapname: "Episode 160" },
      { key: 163, chapslug: "episode-161", chapname: "Episode 161" },
      { key: 164, chapslug: "episode-162", chapname: "Episode 162" },
      { key: 165, chapslug: "episode-163", chapname: "Episode 163" },
      { key: 166, chapslug: "episode-164", chapname: "Episode 164" },
      { key: 167, chapslug: "episode-165", chapname: "Episode 165" },
      { key: 168, chapslug: "episode-166", chapname: "Episode 166" },
      { key: 169, chapslug: "episode-167", chapname: "Episode 167" },
      { key: 170, chapslug: "episode-168", chapname: "Episode 168" },
      { key: 171, chapslug: "episode-169", chapname: "Episode 169" },
      { key: 172, chapslug: "episode-170", chapname: "Episode 170" },
      { key: 173, chapslug: "episode-171", chapname: "Episode 171" },
      { key: 174, chapslug: "episode-172", chapname: "Episode 172" },
      { key: 175, chapslug: "episode-173", chapname: "Episode 173" },
      { key: 176, chapslug: "episode-174", chapname: "Episode 174" },
      { key: 177, chapslug: "episode-175", chapname: "Episode 175" },
      { key: 178, chapslug: "episode-176", chapname: "Episode 176" },
      { key: 179, chapslug: "episode-177", chapname: "Episode 177" },
      { key: 180, chapslug: "episode-178", chapname: "Episode 178" },
      { key: 181, chapslug: "episode-179", chapname: "Episode 179" },
      { key: 182, chapslug: "episode-180", chapname: "Episode 180" },
      { key: 183, chapslug: "episode-181", chapname: "Episode 181" },
      { key: 184, chapslug: "episode-182", chapname: "Episode 182" },
    ],
  },
  {
    key: 2,
    slug: "july-17th",
    name: "JULY 17TH",
    img: "/july-17th.jpg",
    chapters: [
      {
        key: 1,
        chapslug: "one-year-older",
        chapname: "[ one year older ]",
        note: "happy birthday to our boyo, nate! this is just a oneshot kind of thing. but yeah, i hope you like it, bro. &lt;3 xoxo, jjolee.",
      },
    ],
  },
  {
    key: 3,
    slug: "from-jae-to-eaj",
    name: "from Jae to eaJ",
    img: "/from-jae-to-eaj.png",
    chapters: [
      {
        key: 1,
        chapslug: "one",
        chapname: "one",
        note: "hello! for mydays: please leave a comment on how jae has affected your life and any words you'd like to share with him, you can either post it here or on the second episode. i'll be sending this or posting this to jae on his birthday, so don't tag him yet! this is a secret, ok?",
      },
      {
        key: 2,
        chapslug: "two",
        chapname: "two",
        note: "feel free to leave a comment on how jae has affected your life or any words you'd like to give to him! please keep this project a secret until his birthday! thank you! <3",
      },
    ],
  },
  {
    key: 4,
    slug: "rewriting-extinction",
    name: "Rewriting Extinction",
    img: "/rewriting-extinction.jpg",
    chapters: [
      {
        key: 1,
        chapslug: "earth",
        chapname: "EARTH",
        note: "Help save the planet by donating to https://www.rewritingextinction.com/donate/",
      },
    ],
  },
  {
    key: 5,
    slug: "what-the-moon-hides",
    name: "What The Moon Hides",
    img: "/what-the-moon-hides.jpg",
    chapters: [
      {
        key: 1,
        chapslug: "first-encounter",
        chapname: "first encounter",
        note: "sorry for the terrible quality... that's as much as canvas allows and it was the only way i can upload it all in one episode T_T",
      },
      {
        key: 2,
        chapslug: "challenger",
        chapname: "challenger",
        note: "cries in jpeg",
      },
      {
        key: 3,
        chapslug: "unexpected",
        chapname: "unexpected",
        note: "thank u for reading!!!!!!!!!!!!!!!!!!!1",
      },
      {
        key: 4,
        chapslug: "invitation",
        chapname: "invitation",
        note: "sett's just like me fr",
      },
      {
        key: 5,
        chapslug: "last-customer",
        chapname: "last customer",
        note: "i am sorry for the short episode i got burnt out for a bit u-u\nno episode next week because ill be at weebcon this weekend!! i'm sorry!!",
      },
      {
        key: 6,
        chapslug: "to-see-you",
        chapname: "to see you",
        note: "need them to kiss",
      },
      {
        key: 7,
        chapslug: "the-other-side",
        chapname: "the other side",
        note: "im sorry its a short ep!!!",
      },
      {
        key: 8,
        chapslug: "not-a-date",
        chapname: "not a date",
        note: "appleios, comment if u agree",
      },
      {
        key: 9,
        chapslug: "a-nice-try",
        chapname: "a nice try",
        note: "catch dat boi sett",
      },
      {
        key: 10,
        chapslug: "trickster",
        chapname: "trickster",
        note: "no new ep next week sorry yall u-u i have a lot of comms i need to catch up on",
      },
      { key: 11, chapslug: "prayer", chapname: "prayer", note: "we r so back" },
      {
        key: 12,
        chapslug: "something-about-him",
        chapname: "something about him",
        note: "sorry the updates will be sporadic from now on TT but i am doin my best to finish this properly",
      },
      {
        key: 13,
        chapslug: "revelation",
        chapname: "revelation",
        note: "and here comes the angst <3",
      },
      { key: 14, chapslug: "crescent", chapname: "crescent", note: "uh oh" },
      {
        key: 15,
        chapslug: "a-long-time",
        chapname: "a long time",
        note: "so sorry for the sporadic updates!!!! i have a lot of stuff on my plate this month TT",
      },
      {
        key: 16,
        chapslug: "creator-note",
        chapname: "/Creator Note",
        note: "btw, leftovers will be up on my ko-fi after the convention!! i forgor to include that\n\nok, see u guys soon!!!",
      },
      {
        key: 17,
        chapslug: "about-you",
        chapname: "about you",
        note: "slowly trying to upload again T_T",
      },
      {
        key: 18,
        chapslug: "mooncake",
        chapname: "mooncake",
        note: "what's his filling, chat",
      },
      {
        key: 19,
        chapslug: "what-the-moon-hides",
        chapname: "what the moon hides",
        note: "happy holidays everyone!!! i hope this episode was ok!! ive been super busy these months TTT",
      },
      {
        key: 20,
        chapslug: "the-prophecy",
        chapname: "the prophecy",
        note: "we pretend im not 10 months late ...",
      },
      {
        key: 21,
        chapslug: "the-face-of-fear",
        chapname: "the face of fear",
        note: "COMMENT IF BABYPHELIOS",
      },
      {
        key: 22,
        chapslug: "numbing-pain",
        chapname: "numbing pain",
        note: "WE ARE BACK ON TRACK!!! for now",
      },
    ],
  },
];

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
  return;
}

function Note({ note }: { note?: string }) {
  if (note) {
    return (
      <div className="mt-4 p-3 max-w-[800px] bg-accent/30 rounded-sm text-accent-foreground text-sm">
        <div className="text-base pb-2 font-semibold">Creator note:</div>
        {note}
      </div>
    );
  }
}

type Props = {
  params: { webtoonSlug: string; chapterSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  let webtoonData =
    (webtoonName.find(
      (webtoon) => webtoon.slug == params.webtoonSlug
    ) as webtoonFormat) || {};

  let chapterData =
    (webtoonData.chapters.find(
      (chapter) => chapter.chapslug == params.chapterSlug
    ) as {
      chapslug: string;
      chapname: string;
    }) || {};
  return {
    title: { absolute: chapterData.chapname + " | " + webtoonData.name },
    // description: "An archive created by fans for _jjolee's work",
    keywords: ["jjolee", webtoonData.name],
    openGraph: {
      type: "website",
      locale: "en_US",
      url:
        "https://jjolee-archive.vercel.app/webtoon/" +
        webtoonData.slug +
        "/" +
        chapterData.chapslug,
      images: [
        {
          url: webtoonData.img,
          width: 1200,
          height: 630,
          alt: webtoonData.name,
        },
      ],
    },
  };
}

export default async function WebtoonChapterPage({
  params,
}: {
  params: { webtoonSlug: string; chapterSlug: string };
}) {
  const images: {
    fileId: string;
    name: string;
    url: string;
  }[] = await getImages({
    params: {
      webtoonSlug: params.webtoonSlug,
      chapterSlug: params.chapterSlug,
    },
  });
  // separating first image to up the priority of the first image's loading
  const first = images[0];
  images.shift();

  let webtoonData =
    (webtoonName.find(
      (webtoon) => webtoon.slug == params.webtoonSlug
    ) as webtoonFormat) || {};
  let chapterName = webtoonData.chapters;
  // console.log(chapterName);
  let chapterData =
    (chapterName.find(
      (chapter) => chapter.chapslug == params.chapterSlug
    ) as chapterFormat) || {};
  // console.log(chapterData.key + 1);
  let prevChapterData =
    (chapterName.find(
      (chapter) => chapter.key == chapterData.key - 1
    ) as chapterFormat) || {};
  let nextChapterData =
    (chapterName.find(
      (chapter) => chapter.key == chapterData.key + 1
    ) as chapterFormat) || {};
  console.log(nextChapterData);

  if (!chapterData.chapname) {
    return notFound();
  } else {
    return (
      <div className="">
        <div className="flex justify-between space-x-2 pb-4">
          <ChapterSelect
            initialChapter={chapterData.chapname}
            webtoonSlug={params.webtoonSlug}
            chapterName={chapterName}
          />
          <div className="flex space-x-2">
            <NavButton
              numb={prevChapterData.key}
              slug={"./" + prevChapterData.chapslug}
              name="PREV"
            />
            <NavButton
              numb={nextChapterData.key}
              slug={"./" + nextChapterData.chapslug}
              name="NEXT"
            />
          </div>
        </div>
        <div className="">
          <Image
            unoptimized
            key={first.fileId}
            src={first.url}
            width={800}
            height={0}
            priority={true}
            alt={first.name}
          />
          {images.map(({ fileId, name, url }) => (
            <Image
              unoptimized
              key={fileId}
              src={url}
              width={800}
              height={0}
              // alt={"Part of " + chapterData.chapname}
              alt={name}
            />
          ))}
        </div>
        <div className="flex space-x-2 justify-between pt-4">
          <NavButton
            numb={prevChapterData.key}
            slug={"./" + prevChapterData.chapslug}
            name="PREV"
          />
          <ChapterSelect
            initialChapter={chapterData.chapname}
            webtoonSlug={params.webtoonSlug}
            chapterName={chapterName}
          />
          <NavButton
            numb={nextChapterData.key}
            slug={"./" + nextChapterData.chapslug}
            name="NEXT"
          />
        </div>
        <Note note={chapterData.note} />
      </div>
    );
  }
}

async function getImages({
  params,
}: {
  params: { webtoonSlug: string; chapterSlug: string };
}) {
  const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGE_KIT_PUBLIC_API_KEY || "",
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY || "",
    urlEndpoint: process.env.IMAGE_KIT_URL_ENDPOINT || "",
  });
  const images = await imagekit.listFiles({
    path: `webtoons/${params.webtoonSlug}/${params.chapterSlug}/`,
    sort: "ASC_NAME",
  });
  return images;
}
