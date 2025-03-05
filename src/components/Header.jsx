"use client";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const menu = [
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Sign In",
      url: "/login",
    },
  ];

  const searchFunc = (e) => {
    if (e.key === "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };
  return (
    <div className="flex items-center gap-7 h-20 p-5">
      <Link
        href={"/"}
        className="bg-amber-500 rounded-lg p-3 text-2xl font-bold"
      >
        MovieApp
      </Link>
      <div className="flex flex-1 items-center border border-gray-300 p-3 gap-2 rounded-lg">
        <input
          value={keyword}
          onKeyDown={searchFunc}
          onChange={(e) => setKeyword(e.target.value)}
          type="text"
          placeholder="Arama Yapınız!"
          className="outline-none flex-1 bg-transparent"
        />
        <BiSearch size={25} />
      </div>
      <ThemeComp />
      {menu.map((item, i) => (
        <MenuItem item={item} key={i} />
      ))}
    </div>
  );
};

export default Header;
