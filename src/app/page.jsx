import Movies from "@/components/Movies";
import React from "react";

const getData = async (genre) => {
  const genrePath = genre ? `movie/${genre}` : "movie/now_playing";
  const res = await fetch(
    `https://api.themoviedb.org/3/${genrePath}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 1000 } }
  );

  return res.json();
};

const Page = async ({ searchParams }) => {
  const genre = searchParams.genre;
  const data = await getData(genre);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((item, i) => (
        <Movies key={i} item={item} />
      ))}
    </div>
  );
};

export default Page;
