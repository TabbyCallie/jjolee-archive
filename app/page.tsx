import Link from "next/link";

export default async function Home() {
  return (
    <main className="space-y-8">
      <div className="text-lg">This website is a work in progress!!</div>
      <div>
        Webtoons no longer freely accessible on Webtoon:
        <ul className="list-inside list-disc">
          <li>
            <Link href="/webtoon/lost-in-translation/prologue">
              Prologue of Lost in Translation
            </Link>
          </li>
          <li>
            <Link href="/webtoon/july-17th/one-year-older">
              July 17th [A birthday comic for a friend of jjolee]
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
