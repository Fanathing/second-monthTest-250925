const path = require("path");
const boards = require(`../data/boards.js`)


const getList = (req,res) => {
    res.render("boards/list.html", {
        boards
    })
}

const getCreate = (req,res) => {
    res.render("boards/create.html")
}

const postCreate = (req,res) => {
   const { user_id, writer, title, content } = req.body;
   const now = new Date();
   const date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`

   boards.push({
    id: boards.length +1,
    user_id: user_id,
    writer: writer,
    title: title,
    content: content,
    hit: 0,
    created_at:date
   });
   
   res.redirect("/boards");
}

module.exports = {
    getList,
    getCreate,
    postCreate
};