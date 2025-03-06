"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Movies = ({ item }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movie/${item?.id}`)}
      className="min-w-[470px]  relative img-container cursor-pointer"
    >
      <Image
        style={{ objectFit: "cover", height: "300px", width: "470px" }}
        width={470}
        height={300}
        src={`https://image.tmdb.org/t/p/original/${
          item?.backdrop_path || item?.poster_path
        }`}
        alt="movie-img"
        priority
      />
      <div className="absolute bottom-0 p-3 w-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity">
        <div className="text-2xl font-bold">{item?.title}</div>
        <div>
          {item?.release_date} - {item?.vote_average}
        </div>
      </div>
    </div>
  );
};

export default Movies;
