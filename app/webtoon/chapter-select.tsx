"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";
import {
  JSXElementConstructor,
  Key,
  PromiseLikeOfReactNode,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { ArrayKeys } from "zod";

export function ChapterSelect({
  initialChapter,
  // webtoonSlug,
  chapterName,
}: {
  initialChapter: string;
  // webtoonSlug: string;
  chapterName: any[];
}) {
  const [chapter, setChapter] = useState(initialChapter ?? "");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setChapter(initialChapter);
  }, [initialChapter]);
  return (
    <Select
      value={chapter}
      onValueChange={(e) => {
        setChapter;
        router.replace(`/webtoon/lost-in-translation/${encodeURIComponent(e)}`);
        // router.replace(`/webtoon/${webtoonSlug}/${encodeURIComponent(e)}`);
        router.refresh();
      }}
    >
      <SelectTrigger className="max-w-[280px]">
        <SelectValue placeholder={chapter}>{chapter}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {chapterName.map(
          (selection: { key: Key; slug: string; name: string }) => (
            <SelectItem key={selection.key} value={selection.slug}>
              {selection.name}
            </SelectItem>
          )
        )}
      </SelectContent>
    </Select>
  );
}
