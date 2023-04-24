const express = require("express");

const {
  userRegistrationController,
  userLoginController,
  userLogoutController,
} = require("../../controllers");

const { asyncWrapper } = require("../../helpers");
const { authMiddleware } = require("../../middlewares");
const {
  validationMiddleware,
} = require("../../middlewares/validalidationMiddleware");

const {
  userRegistrationSchema,
  userLoginSchema,
} = require("../../models/userModel");

const router = express.Router();

router.post(
  "/register",
  validationMiddleware(userRegistrationSchema),
  asyncWrapper(userRegistrationController)
);
router.post(
  "/login",
  validationMiddleware(userLoginSchema),
  asyncWrapper(userLoginController)
);
router.post("/logout", authMiddleware, asyncWrapper(userLogoutController));

module.exports = router;
