const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data };

  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  sendEmail,
};
