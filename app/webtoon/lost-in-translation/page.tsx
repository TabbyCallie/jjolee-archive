import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../cloudinary-image";
import { ChapterSelect } from "./chapter-select";
import { usePathname } from "next/navigation";
export type chapterResult = {
  public_id: string;
  tags: string[];
};
export default async function WebtoonPage() {
  return (
    <div>
      <h1 className="text-2xl">lost in translation homepage</h1>
    </div>
  );
}
