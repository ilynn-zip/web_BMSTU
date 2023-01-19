const Router = require("express");
const router = new Router();
const userController = require("../controllers/userController");

router.get("/getUsers", userController.getUsers);

router.post("/getUserById", userController.getUserById);
router.post("/getUserByLogin", userController.getUserByLogin);
router.post("/addUser", userController.addUser);

router.delete("/deleteUserById/:id", userController.deleteUserById);

module.exports = router;
