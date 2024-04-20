const express = require("express");

const router = express?.Router();

router?.post("/", (req, res) => {
  return res.status(200).json({
    message: "This is baseV1 POST request",
    error: null,
    body: "BaseV1 is working fine",
  });
});

module.exports = router;
