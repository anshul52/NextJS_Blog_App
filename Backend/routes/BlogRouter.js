const express = require("express");
const {
  AllPost,
  CreateNewBlogPost,
  BlogById,
  searchBlogPosts,
} = require("../controllers/BlogController");
const router = express.Router();

router.get("/allPost", AllPost);
router.post("/create-new-blog-post", CreateNewBlogPost);
router.get("/blog/:id", BlogById);
router.get("/search", searchBlogPosts);

module.exports = router;
