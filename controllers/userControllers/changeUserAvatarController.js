const { changeUserAvatar } = require("../../services");

const changeUserAvatarController = async (req, res) => {
  console.log("Avatar req =", req.file);
  const result = await changeUserAvatar(req);
  return res.status(201).json({
    avatarUrl: result,
  });
};

module.exports = {
  changeUserAvatarController,
};
