const Router = require("express");
const router = new Router();
const customerController = require("../controllers/customer-controller");

router.get("", customerController.getPets);

module.exports = router;
