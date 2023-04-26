const mongoose = require("mongoose");

const { RequestError } = require("../../helpers");
const { Recipe } = require("../../models");
const { ParamsConflictError } = require("../../helpers/errors");
const { User } = require("../../models/userModel");

const addToFavoriteRecipe = async (req) => {
  const { recipeId } = req.params;
  let { _id, numberOfFavorites } = req.user;
  const userId = _id.toString();

  if (!mongoose.Types.ObjectId.isValid(recipeId))
    throw new RequestError(`Recipe id:${recipeId} not found`);

  const { favorites } = await Recipe.findOne({ _id: recipeId });

  const isInFavorites = favorites.some(
    (favorite) => favorite.userId === userId
  );

  if (isInFavorites) {
    throw new ParamsConflictError(
      `Recipe id:${recipeId} already added to favorites`
    );
  }

  const result = await Recipe.findByIdAndUpdate(
    recipeId,
    {
      favorites: [...favorites, { userId }],
    },
    { new: true }
  );

  numberOfFavorites += 1;
  await User.findByIdAndUpdate(_id, { numberOfFavorites }, { new: true });

  return result;
};

module.exports = { addToFavoriteRecipe };
