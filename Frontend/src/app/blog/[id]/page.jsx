import axios from "axios";

// Server Component
async function fetchPostData(id) {
  try {
    const postResponse = await axios.get(
      `http://localhost:5000/api/posts/${id}`
    );
    const commentsResponse = await axios.get(
      `http://localhost:5000/api/posts/${id}/comments`
    );
    return { post: postResponse?.data, comments: commentsResponse?.data };
  } catch (error) {
    console.error("Error fetching post data:", error);
    return { post: null, comments: [] }; // Return default values in case of error
  }
}

const Post = async ({ params }) => {
  const { post, comments } = await fetchPostData(params.id);

  // Handling case if no post is found or there's an error fetching data
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-3xl font-semibold text-red-500">Post Not Found</h1>
        <p className="mt-2 text-sm text-gray-600">
          Sorry, the post could not be retrieved.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-gray-900">{post?.title}</h1>
      <p className="mt-2 text-sm text-gray-600">
        By <span className="font-medium">{post?.author}</span> on{" "}
        {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <div className="mt-6 text-gray-800">
        <p>{post.content}</p>
      </div>

      <h2 className="mt-12 text-2xl font-semibold text-gray-900">Comments</h2>
      {comments.length === 0 ? (
        <p className="mt-4 text-gray-600">No comments available.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {comments?.map((comment) => (
            <li key={comment?.id} className="border-b pb-4">
              <p className="text-gray-800">{comment?.comment}</p>
              <small className="block mt-2 text-sm text-gray-500">
                By {comment?.author || "Anonymous"}
              </small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Post;
