const { changeUserName } = require("../../services");

const changeUserNameController = async (req, res) => {
  const result = await changeUserName(req);
  return res.status(200).json({
    name: result.name,
  });
};

module.exports = {
  changeUserNameController,
};
