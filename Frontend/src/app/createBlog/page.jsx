import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !author) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/posts", {
        title,
        content,
        author,
      });
      router.push(`/posts/${response.data.id}`);
    } catch (err) {
      setError("Error creating post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Create New Blog Post</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
