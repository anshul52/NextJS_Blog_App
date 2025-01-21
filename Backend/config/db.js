const { Sequelize, DataTypes } = require("sequelize");

// Set up Sequelize connection
const sequelize = new Sequelize("blog_app", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// Define your models
const BlogPost = sequelize.define("BlogPost", {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: false },
});

const Comment = sequelize.define("Comment", {
  postId: { type: DataTypes.INTEGER, allowNull: false },
  author: { type: DataTypes.STRING, allowNull: true },
  comment: { type: DataTypes.TEXT, allowNull: false },
});

// Set up associations
BlogPost.hasMany(Comment, { foreignKey: "postId" });
Comment.belongsTo(BlogPost, { foreignKey: "postId" });

// Sync models to database - create tables if not exists
sequelize
  .sync()
  .then(() => console.log("Database synced successfully."))
  .catch((err) => console.log("Error syncing database:", err));

module.exports = { sequelize, BlogPost, Comment };
