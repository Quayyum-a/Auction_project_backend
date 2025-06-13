const express = require("express");
const {
  createAuction,
  getAuctions,
  getAuctionById,
} = require("../controllers/auctionController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth, createAuction);

router.get("/", getAuctions);

router.get("/:id", getAuctionById);

module.exports = router;
