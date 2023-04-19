const express = require("express");
// const {
//   userRegistrationController,
// } = require("../../controllers/authControllers/userRegistrationController");
// const {
//   userLoginController,
// } = require("../../controllers/authControllers/userLoginController");
// const {
//   userLogoutController,
// } = require("../../controllers/authControllers/userLogoutController");

const {
  userRegistrationController,
  userLoginController,
  userLogoutController,
} = require("../../controllers");

const { asyncWrapper } = require("../../helpers");
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.post("/register", asyncWrapper(userRegistrationController));
router.post("/login", asyncWrapper(userLoginController));
router.post("/logout", authMiddleware, asyncWrapper(userLogoutController));

module.exports = router;
