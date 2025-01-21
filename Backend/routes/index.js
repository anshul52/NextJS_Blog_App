const express = require("express");
const BlogRouter = require("../routes/BlogRouter");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Welcome to Blog API");
});
router.use("/api", BlogRouter);
module.exports = router;
