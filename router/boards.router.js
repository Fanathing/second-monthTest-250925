const express = require("express");
const boardsControllers = require(`../controllers/boards.controllers.js`);

const router = express.Router();

router.get("/", boardsControllers.getList);
router.get("/create", boardsControllers.getCreate);

module.exports = router;