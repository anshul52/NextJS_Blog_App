"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMounted, setIsMounted] = useState(false); // State to track if mounted
  const [router, setRouter] = useState(null); // State to store the router

  // Set the router once the component is mounted
  useEffect(() => {
    setIsMounted(true);
    setRouter(useRouter());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-new-blog-post",
        {
          title,
          content,
          author,
        }
      );
      // Only push to router if component is mounted and router is available
      if (router) {
        router.push(`/posts/${response.data.id}`);
      }
    } catch (err) {
      setError("Error creating post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Ensure that the component is mounted before rendering
  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gray-50 min-h-screen w-full">
      <Nav />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* --------------------------------------------------------------------------------------------------------------------- */}
      <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
        <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-700 dark:border-gray-700 border-2 border-indigo-300">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white ">
                Create New Blog Post
              </h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-y-4 text-black">
                  <div>
                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                      Title
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        id="large-input"
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      />
                    </div>
                  </div>
                  {/* ----------- */}
                  <div>
                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                      Author
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      />
                    </div>
                  </div>
                  {/* ----------- */}
                  <div>
                    <label className="block text-sm font-bold ml-1 mb-2 dark:text-white">
                      Content
                    </label>
                    <div className="relative">
                      <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                        className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    {loading ? "Submitting..." : "Create Post"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreateBlog;
