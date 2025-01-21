import Nav from "@/components/Nav";
import Link from "next/link";

export default async function BlogDetailsPage({ params }) {
  const { id } = params;

  let post = null;
  let error = null;

  try {
    const res = await fetch(`http://localhost:5000/api/blog/${id}`);
    if (!res.ok) {
      error = "Post not found or failed to load";
    } else {
      post = await res.json();
    }
  } catch (err) {
    error = "Failed to fetch post data";
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pb-8">
        <Nav />
        <div className="max-w-4xl mx-auto px-4 bg-white shadow rounded p-6">
          <div className="text-center text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <Nav />
      <div className="max-w-4xl mx-auto px-4 bg-white shadow rounded p-6">
        <h1 className="text-4xl text-black font-bold mb-4">{post?.title}</h1>
        <p className="text-gray-500 text-sm mb-4">
          By {post?.author} on {new Date(post?.createdAt).toLocaleDateString()}
        </p>
        <div className="text-gray-700 leading-relaxed">{post?.content}</div>

        <Link
          className="mt-6 inline-block text-blue-500 hover:underline"
          href="/posts"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = params;

  const res = await fetch(`http://localhost:5000/api/blog/${id}`);
  const post = await res.json();

  return {
    title: post.title,
    description: post.content.slice(0, 150),
  };
}
