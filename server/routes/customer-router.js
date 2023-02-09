const Router = require("express");
const router = new Router();
const customerController = require("../controllers/customer-controller");

router.get("/getPets", customerController.getPets);
router.get("/getShops", customerController.getShops);

router.post("/createOrder", customerController.createOrder);
router.post("/getCustomerOrders", customerController.getCustomerOrders);

module.exports = router;
