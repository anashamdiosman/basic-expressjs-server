require("dotenv").config();
const express = require("express");
const defaultRouter = require("./routes/defaultRouter/index");

const app = express();

app.use("/api", defaultRouter);

app.use(express?.json());

app.listen(process?.env?.PORT || 8000, (req, res) => {
  console.log(`Listining on port ${process?.env?.PORT}`);
});
