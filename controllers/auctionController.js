const Auction = require("../models/Auction");
const Bid = require("../models/Bid");


exports.createAuction = async (req, res) => {
  try {
    const { title, description, startingPrice, endTime } = req.body;
    const auction = new Auction({
      title,
      description,
      startingPrice,
      currentPrice: startingPrice,
      endTime,
      user: req.user.userId,
    });
    await auction.save();
    res.status(201).json(auction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAuctions = async (req, res) => {
  try {
    const auctions = await Auction.find().populate("user", "username");
    res.json(auctions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAuctionById = async (req, res) => {
  try {
    const auction = await Auction.findById(req.params.id).populate(
      "user",
      "username"
    );
    if (!auction) return res.status(404).json({ message: "Auction not found" });
    res.json(auction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
