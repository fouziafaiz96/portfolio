const express = require("express");
const app = express();
const path = require("path");
console.log(path.join(__dirname));
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));
app.get("/", (req, res) => {
  res.send("OK");
});
app.listen(8000, () => {
  console.log("listening at port 8000");
});
