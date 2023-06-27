require("dotenv").config();
const express = require("express");
const MongoDBConnect = require("./config");
const app = express();
const port = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

MongoDBConnect.connect();

app.use(require("./routes"));

app.listen(port, () => {
  console.log("Running in port", port);
});
