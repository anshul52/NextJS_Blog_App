"use client";
import React, { useState } from "react";
import Nav from "@/components/Nav";
const ITEMS_PER_PAGE = 5;

const Home = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(posts?.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = posts?.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <Nav />
      <h1>Blog Posts</h1>
      {/* <ul>
        {currentPosts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul> */}
      <div>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
