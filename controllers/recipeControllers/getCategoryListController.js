const { categories } = require("../../helpers");

const getCategoryListController = async (req, res) => {
  const categoryList = [...categories].sort((a, b) => a.localeCompare(b));
  res.status(200).json(categoryList);
};

module.exports = { getCategoryListController };
