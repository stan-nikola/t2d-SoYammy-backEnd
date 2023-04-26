const mongoose = require("mongoose");

const { RequestError } = require("../../helpers");
const { Recipe } = require("../../models");
const { ParamsConflictError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const deleteFromFavoriteRecipe = async (req) => {
  const { recipeId } = req.params;
  const { _id } = req.user;
  const userId = _id.toString();

  if (!mongoose.Types.ObjectId.isValid(recipeId))
    throw new RequestError(`Recipe id:${recipeId} not found`);

  const { favorites } = await Recipe.findOne({ _id: recipeId });

  const isInFavorites = favorites.some(
    (favorite) => favorite.userId === userId
  );

  if (!isInFavorites) {
    throw new ParamsConflictError("Recipe are not in favorites");
  }

  const result = Recipe.update(
    { _id: recipeId },
    { $pull: { favorites: { userId } } }
  );

  let { _id: id, numberOfFavorites } = req.user;
  numberOfFavorites -= 1;
  await User.findByIdAndUpdate(id, { numberOfFavorites }, { new: true });

  return result;
};

module.exports = { deleteFromFavoriteRecipe };
