import Link from "next/link";
import Nav from "@/components/Nav";

export const metadata = {
  title: "Blog App",
  description:
    "Welcome to my awesome blog where I share insightful articles on various topics including technology, coding, and development.",
};

async function fetchPosts() {
  const res = await fetch("http://localhost:5000/api/allPost");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function Home() {
  let posts = [];

  try {
    posts = await fetchPosts();
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Failed to load posts.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <Nav />
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 mt-4 text-black">
          Blog Posts
        </h1>
        {posts.length === 0 ? (
          <p className="text-center text-gray-500">
            No blog posts available.{" "}
            <Link href="/createBlog" className="text-blue-500 hover:underline">
              Please Create a Blog
            </Link>
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
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
                <p className="mt-4 text-gray-700 line-clamp-2">
                  {post.content}
                </p>
                <Link
                  href={`/posts/${post.id}`}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Read more &rarr;
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
