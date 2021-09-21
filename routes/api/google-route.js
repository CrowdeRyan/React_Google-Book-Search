const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router.route("/:searchterm").get(googleController.find);

module.exports = router;
