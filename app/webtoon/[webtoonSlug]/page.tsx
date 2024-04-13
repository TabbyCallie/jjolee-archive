import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { SiWebtoon } from "react-icons/si";
import type { webtoonFormatExt } from "@/utils/types";

const webtoonName: webtoonFormatExt[] = [
  {
    key: 1,
    slug: "july-17th",
    name: "JULY 17TH",
    img: "/july-17th.jpg",
    webtoonLink:
      "https://www.webtoons.com/en/canvas/july-17th/list?title_no=204959",
    description: "a very special day for a very special boy.",
    chapters: [
      { key: 1, chapslug: "one-year-older", chapname: "[ one year older ]" },
    ],
  },
  {
    key: 2,
    slug: "from-jae-to-eaj",
    name: "from Jae to eaJ",
    img: "/from-jae-to-eaj.png",
    webtoonLink:
      "https://www.webtoons.com/en/canvas/from-jae-to-eaj/list?title_no=679534",
    description:
      "disclaimer: this is a fanmade project for Jae's birthday. (please leave a comment for Jae in either episode! I will be sending this to him on his birthday! please keep this project a secret!!!)",
    chapters: [
      { key: 1, chapslug: "one", chapname: "one" },
      { key: 2, chapslug: "two", chapname: "two" },
    ],
  },
  {
    key: 3,
    slug: "rewriting-extinction",
    name: "Rewriting Extinction",
    img: "/rewriting-extinction.jpg",
    webtoonLink:
      "https://www.webtoons.com/en/comedy/rewriting-extinction/list?title_no=3648",
    description:
      "An anthology dedicated to saving as many species from extinction as humanly possible.",
    nb: "Each artist created a different chapter. Please note that this archive only archived _jjolee's chapter.",
    chapters: [{ key: 1, chapslug: "earth", chapname: "EARTH" }],
  },
  {
    key: 4,
    slug: "what-the-moon-hides",
    name: "What The Moon Hides",
    img: "/what-the-moon-hides.jpg",
    webtoonLink:
      "https://www.webtoons.com/en/canvas/what-the-moon-hides/list?title_no=936242",
    description:
      "For years, Sett has been searching for a worthy opponent skilled enough to challenge his strength... Until he finally meets a stranger who dares take on the task. But this stranger seems to have more hidden beneath the surface... Perhaps more than what Sett bargained for.",
    nb: "** DISCLAIMER: Sett/ Aphelios / Alune are characters under Riot Games' IP. This is purely fanmade work and NOT in collaboration with Riot Games! ** \n\nUPDATES EVERY MONDAY",
    chapters: [
      { key: 1, chapslug: "first-encounter", chapname: "first encounter" },
      { key: 2, chapslug: "challenger", chapname: "challenger" },
      { key: 3, chapslug: "unexpected", chapname: "unexpected" },
      { key: 4, chapslug: "invitation", chapname: "invitation" },
      { key: 5, chapslug: "last-customer", chapname: "last customer" },
      { key: 6, chapslug: "to-see-you", chapname: "to see you" },
    ],
  },
];

type Props = {
  params: { webtoonSlug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // fetch data
  let webtoonData =
    (webtoonName.find((webtoon) => webtoon.slug == params.webtoonSlug) as {
      slug: string;
      name: string;
      img: string;
    }) || {};

  return {
    title: webtoonData.name,
    // description: "An archive created by fans for _jjolee's work",
    keywords: ["jjolee", webtoonData.name],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://jjolee-archive.vercel.app/webtoon/" + webtoonData.slug,
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

export default async function WebtoonPage({
  params,
}: {
  params: { webtoonSlug: string };
}) {
  let webtoonData =
    (webtoonName.find(
      (webtoon) => webtoon.slug == params.webtoonSlug
    ) as webtoonFormatExt) || {};
  if (!webtoonData.name) {
    return notFound();
  } else {
    return (
      <div className="w-full">
        <div className="bg-accent/50 text-accent-foreground px-3 md:p-6 py-3 rounded-md mb-4 flex flex-wrap">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 lg:px-10 w-full">
            <div className="md:basis-1/3 flex flex-col self-center items-center">
              <Image
                unoptimized
                className="rounded-full	"
                src={webtoonData.img}
                width={160}
                height={160}
                alt={webtoonData.name}
              />
              <h1 className="text-2xl text-center text-foreground">
                {webtoonData.name}
              </h1>
            </div>
            <div className="md:basis-2/3 pt-2 md:py-5 text-sm space-y-3 flex flex-col justify-between">
              <div>{webtoonData.description}</div>
              {webtoonData.nb ? (
                <div className="text-accent-foreground/70 italic">
                  {webtoonData.nb}
                </div>
              ) : (
                ""
              )}
              <div className="flex space-x-2 self-center md:self-auto">
                <a href={webtoonData.webtoonLink} title="Official Webtoon Link">
                  <SiWebtoon className="text-[#00DC64]" size="2em" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full">
          <ScrollArea className="border rounded-md p-4 h-96 w-full">
            <ul>
              {webtoonData.chapters.reverse().map((data) => (
                <li
                  className="border-b hover:bg-accent/50 hover:text-accent-foreground focus:bg-accent/50 focus:text-accent-foreground"
                  key={data.key}
                >
                  <Link
                    className="flex items-center	"
                    href={"./" + webtoonData.slug + "/" + data.chapslug}
                  >
                    <Image
                      className="pr-2"
                      src={`https://ik.imagekit.io/dd5mgem4p/thumbnails/${
                        webtoonData.slug
                      }/${data.chapname.replace(/[\[\]]/g, "_")} Thumbnail.png`}
                      width={77}
                      height={73}
                      alt={data.chapname}
                    />
                    <span className="flex-initial">{data.chapname}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      </div>
    );
  }
}
