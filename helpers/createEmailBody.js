const createEmailBody = (name, email) => {
  return {
    to: email,
    from: "maxim.solidsoft@meta.ua",
    subject: "So Yummy subscription notification",
    html: `<p> Dear ${name}, we are very glad to notice you about subscription for So Yummy news!</p>`,
  };
};

module.exports = {
  createEmailBody,
};
