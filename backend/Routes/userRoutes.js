const express = require("express");
const {
  registerUser,
  authUser,
  allUser,
} = require("../cotrollers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(registerUser).get(protect, allUser);
router.post("/login", authUser);

module.exports = router;
