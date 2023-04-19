const express = require("express");

const { authMiddleware } = require("../../middlewares");
const { getCurrentUserController } = require("../../controllers");
const { asyncWrapper } = require("../../helpers");

const router = express.Router();

router.get("/current", authMiddleware, asyncWrapper(getCurrentUserController));

module.exports = router;
