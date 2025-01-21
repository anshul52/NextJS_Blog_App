import Nav from "@/components/Nav";
import Link from "next/link";

export default async function BlogDetailsPage({ params }) {
  const { id } = params;

  let post = null;
  let error = null;

  try {
    const res = await fetch(`http://localhost:5000/api/blog/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch post: ${res.statusText}`);
    }
    post = await res.json();
  } catch (err) {
    error =
      err.message || "An unexpected error occurred while fetching the post.";
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pb-8">
        <Nav />
        <div className="max-w-4xl mx-auto px-4 bg-white shadow rounded p-6">
          <div className="text-center text-red-500">
            {error} Please try again later.
          </div>
          <Link
            className="mt-6 inline-block text-blue-500 hover:underline"
            href="/"
          >
            &larr; Back to all posts
          </Link>
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
          href="/"
        >
          &larr; Back to all posts
        </Link>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { id } = params;

  try {
    const res = await fetch(`http://localhost:5000/api/blog/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch metadata: ${res.statusText}`);
    }
    const post = await res.json();

    return {
      title: post.title || "Blog Post",
      description: post.content
        ? post.content.slice(0, 150)
        : "No description available",
    };
  } catch (err) {
    console.error("Error fetching metadata:", err.message);
    return {
      title: "Post not found",
      description: "Unable to fetch metadata for this blog post.",
    };
  }
}
