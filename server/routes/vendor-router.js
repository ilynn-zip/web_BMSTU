const Router = require("express");
const router = new Router();
const vendorController = require("../controllers/vendor-controller");

router.post("/createPet", vendorController.createPet);

module.exports = router;
