const express = require("express");

const defaultRouter = express.Router();

// other routers
const userRouter = require("../users");

defaultRouter?.use("/users", userRouter);

module.exports = defaultRouter;
