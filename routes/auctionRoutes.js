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

// Get a single auction by ID
router.get("/:id", getAuctionById);

module.exports = router;
