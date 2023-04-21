const express = require("express");
const { asyncWrapper } = require("../../helpers");
const {
  getShoppingListController,
  addProductToListController,
} = require("../../controllers");
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getShoppingListController));
router.post("/", authMiddleware, asyncWrapper(addProductToListController));

module.exports = { shoppingListRouter: router };
