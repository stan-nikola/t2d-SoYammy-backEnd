const express = require("express");
const {
  userRegistrationController,
} = require("../../controllers/authControllers/userRegistrationController");
const {
  userLoginController,
} = require("../../controllers/authControllers/userLoginController");
const userLogoutController = require("../../controllers/authControllers/userLogoutController");

const { asyncWrapper } = require("../../helpers/apiHelpers");

const router = express.Router();

router.post("/register", asyncWrapper(userRegistrationController));
router.post("/login", asyncWrapper(userLoginController));
router.post("/logout", asyncWrapper(userLogoutController));

module.exports = router;
