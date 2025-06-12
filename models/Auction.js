const mongoose = require("mongoose");

const auctionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startingPrice: { type: Number, required: true },
  currentPrice: { type: Number, default: 0 },
  endTime: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ["active", "ended"], default: "active" },
});

module.exports = mongoose.model("Auction", auctionSchema);
