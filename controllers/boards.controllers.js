const path = require("path");
const boards = require(`../data/boards.js`)

const getBoards = (req,res) => {
    res.render("boards/list.html", {
        boards
    })
}

module.exports = {
    getBoards
};