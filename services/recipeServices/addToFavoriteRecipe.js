const mongoose = require("mongoose");

const { RequestError } = require("../../helpers");
const { Recipe } = require("../../models");
const { ParamsConflictError } = require("../../helpers/errors");

const addToFavoriteRecipe = async (req) => {
  const { recipeId } = req.params;
  const { _id } = req.user;
  const userId = _id.toString();

  if (!mongoose.Types.ObjectId.isValid(recipeId))
    throw new RequestError(`Recipe id:${recipeId} not found`);

  const { favorites } = await Recipe.findOne({ _id: recipeId });

  const isInFavorites = favorites.some(
    (favorite) => favorite.userId === userId
  );

  if (isInFavorites) {
    throw new ParamsConflictError("Recipe already added to favorites");
  }

  return Recipe.findByIdAndUpdate(
    recipeId,
    {
      favorites: [...favorites, { userId }],
    },
    { new: true }
  );
};

module.exports = { addToFavoriteRecipe };
