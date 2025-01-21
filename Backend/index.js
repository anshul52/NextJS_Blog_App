const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const { sequelize } = require("./config/db.js");
const router = require("./routes/index.js");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
sequelize
  .sync()
  .then(() => console.log("Database synced successfully."))
  .catch((err) => console.log("Error syncing database:", err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(router);

app.listen(PORT, async () => {
  console.log(`Server running on PORT ${PORT}`);
});
