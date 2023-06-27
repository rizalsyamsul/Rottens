require("dotenv").config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT || 4002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes"));
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
