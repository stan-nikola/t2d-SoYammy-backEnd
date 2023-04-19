require("dotenv").config();
const jwt = require("jsonwebtoken");
const { User } = require("../../models/userModel");
const { NotAuthorizedError } = require("../../helpers");
const SECRET_KEY = process.env.JWT_SECRET;

const authMiddleware = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  // console.log("authorization=", authorization);
  // console.log("bearer=", bearer);
  // console.log("token=", token);

  try {
    if (bearer !== "Bearer") {
      throw new NotAuthorizedError("Not authorized");
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    // console.log("id=", id);
    const user = await User.findById(id);
    // console.log("user.token=", user.token);
    if (!user || !user.token || user.token !== token) {
      throw new NotAuthorizedError("Not authorized");
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = {
  authMiddleware,
};
