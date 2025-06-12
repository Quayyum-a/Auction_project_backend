const express = require("express");
const {
  createNotification,
  getNotifications,
} = require("../controllers/notificationController");
const auth = require("../middleware/auth");
const router = express.Router();

// CREATE A NOTIFICATION
router.post("/", createNotification);

// GET NOTIFICATIONS
router.get("/", auth, getNotifications);

module.exports = router;
