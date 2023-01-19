const Router = require("express");
const router = new Router();
const customerController = require("../controllers/customerController");

router.get("", customerController.getPets);

module.exports = router;
