const router = require("express").Router();
const bookController = require("../../controllers/bookController");

router.route("/").get(bookController.find).post(bookController.saveBook);

router
  .route("/:bookid")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;
