const express = require("express");

const { asyncWrapper } = require("../../helpers");
const {
  getIngredientsListController,
  getRecipeByIngredientsController,
} = require("../../controllers");

const router = express.Router();

router.get("/ingredients/list", asyncWrapper(getIngredientsListController));
router.get("/ingredients", asyncWrapper(getRecipeByIngredientsController));

module.exports = { ingredientsRoute: router };
