const { addProductToList } = require("../../services");

const addProductToListController = async (req, res, next) => {
  const { _id: id } = req.user;
  const product = req.body;

  const result = await addProductToList(id, product);

  res.status(201).json(result);
};

module.exports = { addProductToListController };
