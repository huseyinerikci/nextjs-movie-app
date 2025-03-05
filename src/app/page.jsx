import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ searchParams }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      searchParams.genre ? "movie/" + searchParams.genre : "/movie/popular"
    }?api_key=138c2d2656498b9a0f846ff96f223968&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  const data = await res.json();
  console.log(data.results);

  return (
    <div className="flex items-center justify-center flex-wrap gap-3">
      {data?.results?.map((item, i) => (
        <Movies key={i} item={item} />
      ))}
    </div>
  );
};

export default Page;

/*
https://api.themoviedb.org/3/${searchParams.genre ? "movie/" + searchParams genre : "trending/all/day"}? api_key=b37c04a46a0f68c76efea44C1f4c273&language=en-US&page=1*,
( next: { revalidate: 10000 } }

detaylar sayfas1 => `https://api.themoviedb.org/3/movie/$(id)?api_key=b37c04a46a0f68c76efe44c1f4C273`

resim baslangic URL => https://image.tmdb.org/t/p/original/

search sayfasi = `https://api.themoviedb.org/3/search/movie?api_key=b37c04a46a0f68C76fea44c1f4C273&query=
${keyword)&language-en-Us&include_adult-false`

apikey - b37c04a46a0f68C76efea44c1f4c273
*/
