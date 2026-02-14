const express = require("express");
const router = express.Router();

// TEST AUTH ROUTE
router.get("/", (req, res) => {
  res.send("Auth Route Working");
});

module.exports = router;