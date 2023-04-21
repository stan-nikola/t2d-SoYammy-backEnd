const { subscribeToNewsletter } = require("../../services");

const newsSubscribeController = async (req, res) => {
  const result = await subscribeToNewsletter(req);
  return res.status(200).json({
    message: "letter is send",
    subscription: result.subscription,
  });
};

module.exports = {
  newsSubscribeController,
};
