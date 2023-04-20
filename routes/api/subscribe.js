const express = require("express");

const { authMiddleware } = require("../../middlewares");
const { asyncWrapper } = require("../../helpers");
const { newsSubscribeController } = require("../../controllers");

const router = express.Router();

router.post(
  "/subscribe",
  authMiddleware,
  asyncWrapper(newsSubscribeController)
);

module.exports = router;
