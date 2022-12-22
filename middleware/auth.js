const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const User = require("../models/User");
const auth = async (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[1]
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decode = await jwt.verify(token, "fake-jwt-secret");
      await User.findOne({ _id: ObjectId(decode.user._id) });
      next();
    } catch (error) {
      res.status(404).json({ error: "User not found" });
    }
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
};

module.exports = auth;
