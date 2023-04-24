const { getRecipesBySearchQuery } = require("../../services");

const getRecipesBySearchQueryController = async (req, res, next) => {
  let { title, page = 1, limit = 8 } = req.query;
  limit = parseInt(limit);
  const skip = (page - 1) * limit;

  const result = await getRecipesBySearchQuery(title, skip, limit);

  res.status(200).json(result);
};

module.exports = { getRecipesBySearchQueryController };
