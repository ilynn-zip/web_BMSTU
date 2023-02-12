const Router = require("express");
const router = new Router();
const userController = require("../controllers/user-controller");

router.get("/getUsers", userController.getUsers);

router.post("/deleteUser", userController.deleteUser);
router.post("/changeRole", userController.changeRole);
router.post("/register", userController.register);
router.post("/auth", userController.auth);

module.exports = router;
