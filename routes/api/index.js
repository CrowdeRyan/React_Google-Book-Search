const router = require("express").Router();
const bookRoutes = require("./book-route");

router.use("/books", bookRoutes);

module.exports = router;
