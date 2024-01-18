"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

export function ChapterSelect({
  initialChapter,
  webtoonSlug,
  chapterName,
}: {
  initialChapter: string;
  webtoonSlug: string;
  chapterName: any[];
}) {
  const [chapter, setChapter] = useState(initialChapter ?? "");
  const router = useRouter();

  useEffect(() => {
    setChapter(initialChapter);
  }, [initialChapter]);
  return (
    <Select
      value={chapter}
      onValueChange={(e) => {
        setChapter;
        // router.replace(`/webtoon/lost-in-translation/${encodeURIComponent(e)}`);
        router.replace(`/webtoon/${webtoonSlug}/${encodeURIComponent(e)}`);
        router.refresh();
      }}
    >
      <SelectTrigger className="max-w-[280px]">
        <SelectValue placeholder={chapter}>{chapter}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {chapterName.map(
          (selection: { key: Key; chapslug: string; chapname: string }) => (
            <SelectItem key={selection.key} value={selection.chapslug}>
              {selection.chapname}
            </SelectItem>
          )
        )}
      </SelectContent>
    </Select>
  );
}
