const express = require("express");
const router = express.router();

// @desc Login / Landing page
// @route GET /
router.get("/", (req, res) => {
  res.send("Login");
});

module.exports = router;
