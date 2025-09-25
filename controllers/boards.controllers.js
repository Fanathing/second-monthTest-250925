const path = require("path");
const boards = require(`../data/boards.js`)


const getList = (req,res) => {
    res.render("boards/list.html", {
        boards
    })
}

module.exports = {
    getList
};