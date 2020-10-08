const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth");
const isAuth = require("../middlewares/isAuth");
const {
  isValidator,
  registerRules,
  loginRules,
} = require("../middlewares/validators");
router.post("/signup", registerRules(), isValidator, authCtrl.signUp);
router.post("/signin", loginRules(), isValidator, authCtrl.signIn);
router.get("/me", isAuth, authCtrl.getAuthUser);
module.exports = router;
