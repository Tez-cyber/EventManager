const express = require("express");
const User = require("../models/user");
const { protectRoute, restrictTo } = require("../middlewares/protect");
const {} = require("./../controllers/ticket");

const router = express.Router();

router.use(protectRoute);

module.exports = router;
