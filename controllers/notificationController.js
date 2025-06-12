const Notification = require("../models/Notification");

exports.createNotification = async (req, res) => {
  try {
    const { user, message } = req.body;
    const notification = new Notification({ user, message });
    await notification.save();
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({ user: req.user.userId });
    res.json(notifications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
