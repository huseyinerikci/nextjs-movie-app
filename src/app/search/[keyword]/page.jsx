import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res =
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=138c2d2656498b9a0f846ff96f223968&query=
${keyword}&language-en-Us&include_adult-false`);
  const data = await res.json();

  return (
    <div>
      {!data?.results ? (
        <div className="text-red-500">Aranılan sonuc bulunamadı!!</div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {data?.results?.map((item, i) => (
            <Movies key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
