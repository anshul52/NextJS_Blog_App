const { BlogPost } = require("./../config/db");

const AllPost = async (req, res) => {
  try {
    const posts = await BlogPost.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const CreateNewBlogPost = async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newPost = await BlogPost.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: "Failed to create blog post" });
  }
};

module.exports = {
  AllPost,
  CreateNewBlogPost,
};
