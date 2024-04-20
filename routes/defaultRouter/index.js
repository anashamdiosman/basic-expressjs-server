const express = require("express");

const defaultRouter = express.Router();

// other routers
const baseV1Router = require("../baseV1");

defaultRouter?.use("/baseV1", baseV1Router);

module.exports = defaultRouter;
