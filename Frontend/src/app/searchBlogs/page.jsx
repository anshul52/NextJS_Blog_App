"use client";
import Nav from "@/components/Nav";
import { useState } from "react";
import Link from "next/link";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search query.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch(
        `http://localhost:5000/api/search?query=${query}`
      );
      if (!res.ok) throw new Error("Failed to fetch search results.");

      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8 text-black">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <h1 className="text-3xl font-bold mb-6">Search Blog Posts</h1>

        {/* Search Input */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search for blog posts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Loading Spinner */}
        {loading && <p className="text-gray-500">Searching...</p>}

        {/* Results */}
        <div className="mt-4">
          {results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((post) => (
                <li
                  key={post.id}
                  className="p-4 border rounded shadow-sm hover:shadow-md"
                >
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold">{post?.title}</h2>
                    <p className="text-sm text-gray-500">
                      By {post?.author} on{" "}
                      {new Date(post?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700">
                      {post?.content?.slice(0, 100)}...
                    </p>
                  </Link>{" "}
                </li>
              ))}
            </ul>
          ) : (
            !loading && <p className="text-gray-500">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
