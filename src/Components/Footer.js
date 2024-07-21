import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="w-[100%] bg-[#f5f4f4] h-[140px] ">
        <div className="w-[100%] h-[100%] md:flex-row flex flex-col justify-around items-center ">
          <div className="font-bold">
            <h1>Thrill Seekers</h1>
          </div>
          <div className="flex justify-center items-center gap-8 text-[12px] font-semibold">
            <Link href="/">Countries</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Pick a tour</Link>
            <Link href="/">Reviews</Link>
            <Link href="/">Offers</Link>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Footer;
