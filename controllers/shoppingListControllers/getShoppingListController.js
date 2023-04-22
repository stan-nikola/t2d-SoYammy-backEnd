const { getShoppingList } = require("../../services");

const getShoppingListController = async (req, res, next) => {
  const { _id: id } = req.user;

  const result = await getShoppingList(id);

  res.status(200).json(result);
};

module.exports = {
  getShoppingListController,
};
