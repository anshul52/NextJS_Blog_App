const express = require("express");
const { AllPost, CreateNewBlogPost } = require("../controllers/BlogController");
const router = express.Router();

router.get("/allPost", AllPost);
router.post("/create-new-blog-post", CreateNewBlogPost);

module.exports = router;
