const ObjectId = require("mongodb").ObjectId;
const { Recipe } = require("../../models");

const getUserRecipes = async (req) => {
  let { page = 1, limit = 4 } = req.query;

  limit = parseInt(limit);

  const skip = (page - 1) * limit;

  return await Recipe.aggregate([
    {
      $match: {
        owner: new ObjectId(req.user._id),
      },
    },
    { $setWindowFields: { output: { totalCount: { $count: {} } } } },
  ])
    .skip(skip)
    .limit(limit);
};

module.exports = { getUserRecipes };
