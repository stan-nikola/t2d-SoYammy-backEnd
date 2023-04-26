const { User } = require("../../models/userModel");
const { RequestError } = require("../../helpers");
const { createEmailBody, sendEmail } = require("../../helpers");

const subscribeToNewsletter = async (req) => {
  const { name, email } = req.user;
  const mail = createEmailBody(name, email);
  const result = await sendEmail(mail);
  console.log("result1 =", result);
  if (!result) {
    throw new RequestError("Attempt failed");
  }
  const id = req.user._id;
  return await User.findByIdAndUpdate(
    id,
    { subscription: true },
    { new: true }
  );
};

module.exports = {
  subscribeToNewsletter,
};
