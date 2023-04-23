const express = require("express");

const { asyncWrapper } = require("../../helpers");
const {
  uploadCloud,
  authMiddleware,
  validationMiddleware,
} = require("../../middlewares");
const {
  addOwnRecipeController,
  deleteOwnRecipeController,
  getUserRecipesController,
  addToFavoriteRecipeController,
  getUserFavoriteRecipesController,
  deleteFromFavoriteRecipeController,
} = require("../../controllers");
const { joiRecipeSchema } = require("../../models/recipeModel");

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  uploadCloud.single("recipeImage"),
  validationMiddleware(joiRecipeSchema),
  asyncWrapper(addOwnRecipeController)
);

router.get("/", authMiddleware, asyncWrapper(getUserRecipesController));
router.delete(
  "/:recipeId",
  authMiddleware,
  asyncWrapper(deleteOwnRecipeController)
);
router.put(
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
  "/favorite/:recipeId",
  authMiddleware,
  asyncWrapper(deleteFromFavoriteRecipeController)
);

module.exports = { userRecipesRoute: router };
