const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  createInventoryController,
  getInventoryController,
  getDonorsController,
  getHospitalController,
  getOrganisationController,
  getOrganisationForHospitalController,
  getInventoryHospitalController,
  recentInventoryController,
} = require("../controllers/inventoryController");

const router = express.Router();

router.post("/create-inventory", authMiddleware, createInventoryController);

router.get("/get-inventory", authMiddleware, getInventoryController);

router.get("/get-donors", authMiddleware, getDonorsController);

router.get("/get-hospitals", authMiddleware, getHospitalController);

router.get("/get-organisations", authMiddleware, getOrganisationController);

//get
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);

router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);

router.get("/get-recent-inventory", authMiddleware, recentInventoryController);

module.exports = router;
