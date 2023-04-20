const { subscribeToNewsletter } = require("../../services");

const newsSubscribeController = async (req, res) => {
  await subscribeToNewsletter(req);
  return res.status(200).json({
    message: "letter is send",
  });
};

module.exports = {
  newsSubscribeController,
};
