const Bid = require("../models/Bid");
const Auction = require("../models/Auction");


exports.placeBid = async (req, res) => {
  try {
    const { amount } = req.body;
    const auction = await Auction.findById(req.body.auctionId);
    if (!auction) return res.status(404).json({ message: "Auction not found" });
    if (auction.status !== "active")
      return res.status(400).json({ message: "Auction has ended" });
    if (amount <= auction.currentPrice)
      return res
        .status(400)
        .json({ message: "Bid must be higher than current price" });
    const bid = new Bid({
      amount,
      user: req.user.userId,
      auction: auction._id,
    });
    await bid.save();
    auction.currentPrice = amount;
    await auction.save();
    res.status(201).json(bid);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
