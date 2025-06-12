const express = require("express");
const {
  createAuction,
  getAuctions,
  getAuctionById,
} = require("../controllers/auctionController");
const auth = require("../middleware/auth");
const router = express.Router();

// Create a new auction
router.post("/", auth, createAuction);

// Get all auctions
router.get("/", getAuctions);

// Get a single auction by ID
router.get("/:id", getAuctionById);

module.exports = router;
