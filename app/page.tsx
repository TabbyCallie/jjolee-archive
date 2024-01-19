import cloudinary from "cloudinary";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { CloudinaryImage } from "../components/cloudinary-image";
import Link from "next/link";

export default async function Home() {
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
