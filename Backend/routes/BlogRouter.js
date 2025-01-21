const express = require("express");
const {
  AllPost,
  CreateNewBlogPost,
  BlogById,
} = require("../controllers/BlogController");
const router = express.Router();

router.get("/allPost", AllPost);
router.post("/create-new-blog-post", CreateNewBlogPost);
router.get("/blog/:id", BlogById);

module.exports = router;
