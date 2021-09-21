const router = require("express").Router();
const bookRoutes = require("./book-route");
const googleRoutes = require("./google-route");

router.use("/google", googleRoutes);

router.use("/books", bookRoutes);

module.exports = router;
