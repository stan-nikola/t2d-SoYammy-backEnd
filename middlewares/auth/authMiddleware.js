const { verifyToken, NotAuthorizedError } = require("../../helpers");

const { User } = require("../../models");

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;

  const [bearer, token] = authorization.split(" ");

  bearer !== "Bearer" && next(new NotAuthorizedError("Not authorized"));

  try {
    const user = await User.findOne({ token });

    const verifiedToken = verifyToken(user.token);

    req.user = verifiedToken;

    next();
  } catch (error) {
    next(new NotAuthorizedError("Not authorized"));
  }
};

module.exports = { authMiddleware };
