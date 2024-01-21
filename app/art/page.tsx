import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";

export type SearchResult = {
  public_id: string;
  tags: string[];
  metadata: {
    caption: string;
    post_date: string;
    platform: string;
    twitter_link: string;
    instagram_link: string;
  };
};

function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export default async function ArtPage({
  searchParams: { search },
}: {
  searchParams: {
    search: string;
  };
}) {
  const results = (await cloudinary.v2.search
    // .expression('metadata.caption:"instead"')
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
    .max_results(200)
    .with_field("metadata")
    .sort_by("score", "desc")
    .with_field("tags")
    .execute()) as {
    resources: SearchResult[];
  };

  console.log(results);

  return (
    <div>
      <div className="columns-1 gap-3 sm:columns-2 sm:gap-5 md:columns-3 lg:columns-4 space-y-3 sm:space-y-5">
        {shuffle(results.resources).map((result) => (
          <div key={result.public_id}>
            <CloudinaryImage
              imagedata={result}
              width={500}
              height={0}
              alt={result.metadata.caption}
            />
            {/* {console.log(result.metadata)} */}
            <div>{result.metadata.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
