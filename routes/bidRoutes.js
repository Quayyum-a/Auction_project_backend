const express = require("express");
const { placeBid } = require("../controllers/bidController");
const auth = require("../middleware/auth");
const router = express.Router();

// Bid routes will go here
router.post("/", auth, placeBid);

module.exports = router;
