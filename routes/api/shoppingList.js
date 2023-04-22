const express = require("express");
const { asyncWrapper } = require("../../helpers");
const {
  getShoppingListController,
  addProductToListController,
  removeProductFromListController,
} = require("../../controllers");
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.get("/", authMiddleware, asyncWrapper(getShoppingListController));
router.post("/", authMiddleware, asyncWrapper(addProductToListController));
router.patch(
  "/",
  authMiddleware,
  asyncWrapper(removeProductFromListController)
);

module.exports = { shoppingListRouter: router };
