const express = require("express");

const { authMiddleware, uploadCloud } = require("../../middlewares");
const {
  getCurrentUserController,
  changeUserAvatarController,
  changeUserNameController,
  changeUserDataController,
} = require("../../controllers");
const { asyncWrapper } = require("../../helpers");

const router = express.Router();

router.get("/current", authMiddleware, asyncWrapper(getCurrentUserController));

router.patch(
  "/changeUserData",
  authMiddleware,
  uploadCloud.single("avatarImage"),
  asyncWrapper(changeUserDataController)
);

router.patch(
  "/avatar",
  authMiddleware,
  uploadCloud.single("avatarImage"),
  asyncWrapper(changeUserAvatarController)
);
router.patch(
  "/changeName",
  authMiddleware,
  asyncWrapper(changeUserNameController)
);

module.exports = router;
