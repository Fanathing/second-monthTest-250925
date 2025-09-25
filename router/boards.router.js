const express = require("express");
const boardsControllers = require(`../controllers/boards.controllers.js`);

const router = express.Router();

router.get("/", boardsControllers.getList);
router.get("/create", boardsControllers.getCreate);
router.post("/create", boardsControllers.postCreate);
router.get("/view/:user_id", boardsControllers.getView);
router.get("/update/:user_id", boardsControllers.getUpdate);

module.exports = router;