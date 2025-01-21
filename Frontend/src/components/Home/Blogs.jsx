"use client";
import { useState, useEffect } from "react";
import PaginationControls from "@/components/Home/PaginationControls";
import Link from "next/link";

async function fetchPosts() {
  const res = await fetch("http://localhost:5000/api/allPost");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      setError("");

      try {
        const allPosts = await fetchPosts();
        setPosts(allPosts);
      } catch (err) {
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Calculate indices for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8 mt-4 text-black">
        Blog Posts
      </h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : currentPosts.length === 0 ? (
        <p className="text-center text-gray-500">
          No blog posts available.{" "}
          <Link href="/createBlog" className="text-blue-500 hover:underline">
            Please Create a Blog
          </Link>
        </p>
      ) : (
        <ul className="space-y-6">
          {currentPosts.map((post) => (
            <li
              key={post.id}
              className="p-6 bg-white shadow rounded hover:shadow-lg transition"
            >
              <Link href={`/blog/${post.id}`}>
                <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-500 text-sm mt-2">
                By {post.author} on{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
              <p className="mt-4 text-gray-700 line-clamp-2">{post.content}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block mt-4 text-blue-500 hover:underline"
              >
                Read more &rarr;
              </Link>
            </li>
          ))}
        </ul>
      )}
      {/* Pagination Controls */}

      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
};

export default Blogs;
