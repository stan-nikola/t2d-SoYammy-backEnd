const { changeUserData } = require("../../services");

const changeUserDataController = async (req, res) => {
  const result = await changeUserData(req);
  return res.status(201).json({
    name: result.name,
    avatarUrl: result.avatarUrl,
  });
};

module.exports = {
  changeUserDataController,
};
