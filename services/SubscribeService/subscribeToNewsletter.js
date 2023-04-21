const { User } = require("../../models/userModel");
const { createEmailBody, sendEmail } = require("../../helpers");

const subscribeToNewsletter = async (req) => {
  const { name, email } = req.user;
  const mail = createEmailBody(name, email);
  await sendEmail(mail);
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
