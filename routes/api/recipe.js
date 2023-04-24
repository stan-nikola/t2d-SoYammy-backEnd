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
const { authMiddleware } = require("../../middlewares");

const router = express.Router();

router.get(
  "/category-list",
  authMiddleware,
  asyncWrapper(getCategoryListController)
);

router.get("/main-page", authMiddleware, asyncWrapper(getRecipesController));

router.get(
  "/category/:category",
  authMiddleware,
  asyncWrapper(getRecipesByCategoryController)
);

router.get("/search", asyncWrapper(getRecipesBySearchQueryController));
router.get("/popular-recipe", asyncWrapper(popularRecipesController));

router.get("/:id", asyncWrapper(getRecipeByIdController));

module.exports = { recipesRoute: router };
