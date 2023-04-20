const { changeUserAvatar } = require("../../services");

const changeUserAvatarController = async (req, res) => {
  const result = await changeUserAvatar(req);
  return res.status(201).json({
    avatarUrl: result,
  });
};

module.exports = {
  changeUserAvatarController,
};
