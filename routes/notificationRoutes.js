const express = require("express");
const {
  createNotification,
  getNotifications,
} = require("../controllers/notificationController");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", createNotification);

router.get("/", auth, getNotifications);

module.exports = router;
