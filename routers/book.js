const bookCtrl = require("../controllers/book");
const express = require("express");
const router = express.Router();

router.get("/", bookCtrl.getBooks);
router.get("/:_id", bookCtrl.getOneBook);
router.post("/", bookCtrl.addBook);
router.delete("/:_id", bookCtrl.deleteBook);
router.put("/:_id", bookCtrl.editBook);

module.exports = router;
