import Image from "next/image";
import React from "react";

const getMovie = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return await res.json();
};
const Page = async ({ params }) => {
  const movieDetail = await getMovie(params.id);
  return (
    <div className="relative p-7 min-h-screen">
      <Image
        style={{ objectFit: "cover" }}
        fill
        src={`https://image.tmdb.org/t/p/original/${
          movieDetail?.backdrop_path || movieDetail?.poster_path
        }`}
        alt="detail-img"
        priority
      />
      <div className="absolute">
        <div className="text-4xl font-bold my-3">{movieDetail?.title}</div>
        <div className="w-1/2">{movieDetail?.overview}</div>
        <div className="my-3">
          {movieDetail?.release_date} - {movieDetail?.vote_average}
        </div>
        <div className="my-2 border w-32 hover:bg-white hover:text-black p-2 rounded-md text-center text-lg cursor-pointer">
          Trail
        </div>
      </div>
    </div>
  );
};

export default Page;
