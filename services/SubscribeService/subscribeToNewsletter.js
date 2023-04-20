const { createEmailBody, sendEmail } = require("../../helpers");

const subscribeToNewsletter = async (req) => {
  const { name, email } = req.user;
  const mail = createEmailBody(name, email);
  await sendEmail(mail);
};

module.exports = {
  subscribeToNewsletter,
};
