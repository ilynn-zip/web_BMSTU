const Router = require("express");
const router = new Router();
const customerRouter = require("../routes/customer-router");
const userRouter = require("../routes/user-router");

router.use("/customer", customerRouter);
router.use("/user", userRouter);

module.exports = router;
