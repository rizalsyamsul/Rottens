const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes"));

app.listen(port, () => {
  console.log("App Running in Port", port);
});
