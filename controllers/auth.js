const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
//create new account for user
exports.signUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    //check if user exist
    let user = await User.findOne({ email });
    if (user) return res.status(400).send({ msg: "the User exist!" });
    //if user not exist create new user
    user = new User({ email, username, password });
    //hash password
    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    await user.save();
    //create a token
    const payload = { _id: user.id };
    const token = jwt.sign(payload, config.get("secretToken"), {
      expiresIn: "30d",
    });
    return res.status(201).send({ user: convertUser(user), token });
  } catch (error) {
    console.dir(error);
    return res.status(500).send({ error });
  }
};
//authentication
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    //check if user does not exist
    let user = await User.findOne({ email });
    if (!user) return res.status(400).send({ msg: "bad credentials!" });
    //if user exist check if the password is matched
    const validation = await bcrypt.compare(password, user.password);
    if (!validation)
      return res.status(400).send({ msg: "passwords are not matching" });
    //create a token
    const payload = { _id: user.id };
    const token = jwt.sign(payload, config.get("secretToken"), {
      expiresIn: "30d",
    });
    return res
      .status(201)
      .send({ msg: "Login Success", user: convertUser(user), token });
  } catch (error) {
    console.dir(error);
    return res.status(500).send({ error });
  }
};
exports.getAuthUser = (req, res) => {
  return res.status(200).send({ user: req.user });
};
const convertUser = ({ email, password, username }) => {
  return {
    email,
    username,
  };
};
