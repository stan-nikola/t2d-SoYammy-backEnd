const express = require("express");
const { asyncWrapper } = require("../../helpers");
const {
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,
  getRecipesBySearchQueryController,
  popularRecipesController,
} = require("../../controllers");

const router = express.Router();

router.get("/category-list", asyncWrapper(getCategoryListController));

router.get("/main-page", asyncWrapper(getRecipesController));

router.get("/category/:category", asyncWrapper(getRecipesByCategoryController));

router.get("/search", asyncWrapper(getRecipesBySearchQueryController));
router.get("/popular-recipe", asyncWrapper(popularRecipesController));

router.get("/:id", asyncWrapper(getRecipeByIdController));

module.exports = { recipesRoute: router };
