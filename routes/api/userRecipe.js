const express = require("express");

const { asyncWrapper } = require("../../helpers");
const { uploadCloud, authMiddleware } = require("../../middlewares");
const {
  addOwnRecipeController,
  deleteOwnRecipeController,
  getUserRecipesController,
  addToFavoriteRecipeController,
  getUserFavoriteRecipesController,
  deleteFromFavoriteRecipeController,
} = require("../../controllers");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  uploadCloud.single("recipesImage"),
  asyncWrapper(addOwnRecipeController)
);

router.get("/", authMiddleware, asyncWrapper(getUserRecipesController));
router.delete(
  "/:recipeId",
  authMiddleware,
  asyncWrapper(deleteOwnRecipeController)
);
router.patch(
  "/favorite/:recipeId",
  authMiddleware,
  asyncWrapper(addToFavoriteRecipeController)
);
router.get(
  "/favorite",
  authMiddleware,
  asyncWrapper(getUserFavoriteRecipesController)
);
router.patch(
  "/favorite",
  authMiddleware,
  asyncWrapper(deleteFromFavoriteRecipeController)
);

module.exports = { userRecipesRoute: router };
