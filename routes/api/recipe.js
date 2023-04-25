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

router.get(
  "/search",
  authMiddleware,
  asyncWrapper(getRecipesBySearchQueryController)
);
router.get(
  "/popular-recipe",
  authMiddleware,
  asyncWrapper(popularRecipesController)
);

router.get("/:id", authMiddleware, asyncWrapper(getRecipeByIdController));

module.exports = { recipesRoute: router };
