const Router = require("express");
const router = new Router();
const customerRouter = require("../routes/customerRouter");
const userRouter = require("../routes/userRouter");

router.use("/pets", customerRouter);
router.use("/user", userRouter);

module.exports = router;
