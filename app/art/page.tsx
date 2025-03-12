import cloudinary from "cloudinary";
import { CloudinaryImage } from "../../components/cloudinary-image";

export type SearchResult = {
  public_id: string;
  tags: string[];
  created_at: Date;
  metadata: {
    platform: string[];
    twitterlink: string;
    caption: string;
    datetime: string;
    instagramlink: string;
    instagramcaption: string;
    instagramdatetime: string;
    tumblrlink: string;
    tumblrcaption: string;
    tumblrdatetime: string;
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
    .expression(
      `folder: "/*" AND resource_type:image${
        search ? ` AND tags=${search}` : ""
      }`
    )
    .max_results(200)
    .with_field("metadata")
    .sort_by("score", "desc")
    .with_field("tags")
    .execute()) as {
    resources: SearchResult[];
  };

  for (let i = 0; i < results.resources.length; i++) {
    const element = results.resources[i];
    // element.created_at =

    var dates: number[] = [];
    if (element.metadata.datetime)
      dates.push(Date.parse(element.metadata.datetime));
    if (element.metadata.instagramdatetime)
      dates.push(Date.parse(element.metadata.instagramdatetime));
    if (element.metadata.tumblrdatetime)
      dates.push(Date.parse(element.metadata.tumblrdatetime));

    element.created_at = new Date(Math.min.apply(null, dates));
  }

  return (
    <div>
      <div className="columns-1 gap-3 space-y-3 sm:columns-2 sm:gap-5 sm:space-y-5 md:columns-3 lg:columns-4">
        {/* {shuffle(results.resources).map((result) => ( */}
        {results.resources
          .sort((a, b) => b.created_at.valueOf() - a.created_at.valueOf())
          .map((result) => (
            <div key={result.public_id}>
              <CloudinaryImage
                imagedata={result}
                width={500}
                height={0}
                alt={result.metadata.caption}
              />
              {/* {console.log(result.metadata)} */}
              <div>{result.created_at.toDateString()}</div>
            </div>
          ))}
      </div>
    </div>
  );
}
