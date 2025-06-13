const express = require("express");
const { placeBid } = require("../controllers/bidController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, placeBid);

module.exports = router;
