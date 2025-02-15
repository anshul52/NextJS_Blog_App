const { BlogPost } = require("./../config/db");
const { Op } = require("sequelize");
// Get all blog posts
const AllPost = async (req, res) => {
  try {
    const posts = await BlogPost.findAll();
    if (!posts || posts.length === 0) {
      return res.status(200).json({ message: "No blog posts found." });
    }
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    res.status(500).json({
      error:
        "An error occurred while fetching the blog posts. Please try again later.",
    });
  }
};

// Create a new blog post
const CreateNewBlogPost = async (req, res) => {
  const { title, content, author } = req.body;

  // Validate input fields
  if (!title || typeof title !== "string" || title.trim() === "") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a valid string." });
  }
  if (!content || typeof content !== "string" || content.trim() === "") {
    return res
      .status(400)
      .json({ error: "Content is required and must be a valid string." });
  }
  if (!author || typeof author !== "string" || author.trim() === "") {
    return res
      .status(400)
      .json({ error: "Author is required and must be a valid string." });
  }

  try {
    const newPost = await BlogPost.create({
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
    });
    res.status(201).json({
      message: "Blog post created successfully.",
      post: newPost,
    });
  } catch (err) {
    console.error("Error creating blog post:", err);
    res.status(500).json({
      error: "Failed to create blog post. Please try again later.",
    });
  }
};

const BlogById = async (req, res) => {
  const { id } = req.params;
  console.log("id---", id);

  // Validate ID
  if (!id || isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID provided." });
  }

  try {
    // Find the blog post by ID
    const blogPost = await BlogPost.findByPk(id);

    // Check if the blog post exists
    if (!blogPost) {
      return res.status(404).json({ error: "Blog post not found." });
    }

    // Return the blog post
    res.status(200).json(blogPost);
  } catch (err) {
    console.error("Error fetching blog post:", err);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the blog post." });
  }
};

const searchBlogPosts = async (req, res) => {
  const { query } = req.query; // Extract the search query from the request
  console.log("query---", query);

  if (!query || query.trim() === "") {
    return res.status(400).json({ error: "Search query is required" });
  }

  try {
    // Perform the search in title or content (case-insensitive search using Op.iLike)
    const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${query.toLowerCase()}%`, // Case-insensitive search
            },
          },
          {
            content: {
              [Op.like]: `%${query.toLowerCase()}%`, // Case-insensitive search
            },
          },
        ],
      },
      // Optionally, ensure the query string is lowercase for comparison
      raw: true, // Use raw to get plain JSON response (without Sequelize instance overhead)
    });

    if (posts.length === 0) {
      return res.status(404).json({ message: "No blog posts found" });
    }

    // Respond with the found blog posts
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch search results" });
  }
};

module.exports = {
  AllPost,
  CreateNewBlogPost,
  BlogById,
  searchBlogPosts,
};
