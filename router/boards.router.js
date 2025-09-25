const express = require("express");
const boardsControllers = require(`../controllers/boards.controllers.js`);

const router = express.Router();

router.get("/", boardsControllers.getList);

module.exports = router;