"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <nav className="fixed h-[10vh] bg-[#061a3c] flex gap-10 text-white w-full items-center justify-between font-Poppins p-4 px-[3vw] z-[99999] mb-3 cursor-pointer">
        <div className="sm:flex hidden  gap-7 items-center">
          <Link href={"/"} className="no-underline">
            Home
          </Link>
          <Link href={"/createBlog"}>Create Blog</Link>
          <Link href={"/aboutus"}> About Us</Link>
          <Link href={"/searchBlogs"}>Search Blogs</Link>
        </div>
        <div className="font-bold text-2xl sm:mr-24 flex items-center gap-4">
          <Link href={"/"} className="text-white no-underline">
            <span className="text-orange-500">B</span>
            loggy
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <div className="sm:scale-125"> </div>
        </div>
      </nav>

      <nav className=" h-[10vh] w-full"></nav>
    </>
  );
};

export default Nav;
