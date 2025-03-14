import Link from "next/link";

export default async function Home() {
  return (
    <main className="space-y-8">
      <div className="text-lg">Webtoons by Jjolee</div>
      <div>
        Webtoons no longer freely accessible on Webtoon:
        <ul className="list-inside list-disc">
          <li>
            <Link href="/webtoon/lost-in-translation">Lost in Translation</Link>
          </li>
          <li>
            <Link href="/webtoon/july-17th">July 17th</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
