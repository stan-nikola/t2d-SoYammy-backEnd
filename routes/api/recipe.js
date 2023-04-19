const express = require("express");
const { asyncWrapper } = require("../../helpers");
const {
  addOwnRecipeController,
  deleteOwnRecipeController,
  getCategoryListController,
  getRecipesController,
  getRecipesByCategoryController,
  getRecipeByIdController,
} = require("../../controllers");

const { uploadCloud, authMiddleware } = require("../../middlewares");
const {
  getUserRecipesController,
} = require("../../controllers/recipeControllers/getUserRecipesController");

const router = express.Router();

router.post(
  "/ownRecipes",
  authMiddleware,
  uploadCloud.single("recipesImage"),
  asyncWrapper(addOwnRecipeController)
);

router.delete(
  "/ownRecipes/:recipeId",
  authMiddleware,
  asyncWrapper(deleteOwnRecipeController)
);
router.get(
  "/ownRecipes",
  authMiddleware,
  asyncWrapper(getUserRecipesController)
);

router.get("/category-list", asyncWrapper(getCategoryListController));

router.get("/main-page", asyncWrapper(getRecipesController));

router.get("/category/:category", asyncWrapper(getRecipesByCategoryController));

router.get("/:id", asyncWrapper(getRecipeByIdController));

module.exports = { recipesRoute: router };
