const express = require("express");
const router = express.Router();

// TEST REPORT ROUTE
router.get("/", (req, res) => {
  res.send("Report Route Working");
});

module.exports = router;