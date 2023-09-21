const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  bloodGroupDetailsController,
} = require("../controllers/analyticsController");

const router = express.Router();

router.get("/bloodgroups-data", authMiddleware, bloodGroupDetailsController);

module.exports = router;
