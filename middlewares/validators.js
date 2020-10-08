const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("username", "username field is Empty").notEmpty(),
  body("password", "password must containt at least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
  body("email", "email is not valid").isEmail(),
];

const loginRules = () => [
  body("password", "password must containt at least 6 characters").isLength({
    min: 6,
    max: 20,
  }),
  body("email", "email is not valid").isEmail(),
];
const isValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((error) => ({
        msg: error.msg,
      })),
    });
  }
  next();
};

module.exports = { registerRules, loginRules, isValidator };
