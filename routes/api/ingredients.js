const express = require("express");

const { asyncWrapper } = require("../../helpers");
const {
  getIngredientsListController,
  getRecipeByIngredientsController,
} = require("../../controllers");

const router = express.Router();

router.get("/list", asyncWrapper(getIngredientsListController));
router.get("/", asyncWrapper(getRecipeByIngredientsController));

module.exports = { ingredientsRoute: router };
