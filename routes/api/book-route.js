const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/").get(bookController.find).post(bookController.saveBook);

router.route("/:bookid").delete(bookController.deleteBook);

module.exports = router;
