const { removeProductFromList } = require("../../services");

const removeProductFromListController = async (req, res, next) => {
  const { _id: userId } = req.user;
  const { _id: productId } = req.body;

  const result = await removeProductFromList(userId, productId);

  res.status(200).json(result);
};

module.exports = { removeProductFromListController };
