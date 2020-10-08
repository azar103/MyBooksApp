const User = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("config");
const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) return res.status(400).send({ msg: "Unauthorized" });
    const decoded = await jwt.verify(token, config.get("secretToken"));

    const user = await User.findOne({ _id: decoded._id }).select("-password");
    if (!user) return res.status(500).send({ msg: "Unauthorized" });
    req.user = user;
    next();
  } catch (error) {
    //console.dir(error);
    return res.status(500).send({ msg: "Unauthorized" });
  }
};

module.exports = isAuth;
