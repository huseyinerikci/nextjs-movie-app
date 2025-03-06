import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const res =
    await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=
${keyword}&language=en-Us&include_adult=false`);
  const data = await res.json();

  return (
    <div>
      {!data?.results || data.results.length === 0 ? (
        <div className="text-red-500 flex justify-center items-center my-52  ">
          Aranılan sonuc bulunamadı!!
        </div>
      ) : (
        <div className="flex items-center justify-center flex-wrap gap-3">
          {data.results.map((item, i) => (
            <Movies key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
