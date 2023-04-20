const { getRecipesBySearchQuery } = require("../../services");

const getRecipesBySearchQueryController = async (req, res, next) => {
  const { title } = req.query;
  const result = await getRecipesBySearchQuery(title);

  res.status(200).json(result);
};

module.exports = { getRecipesBySearchQueryController };
