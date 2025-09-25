const path = require("path");
const boards = require(`../data/boards.js`);

// 게시판 목록 페이지
const getList = (req,res) => {
    res.render("boards/list.html", {
        boards
    });
}
// 글 생성 페이지
const getCreate = (req,res) => {
    res.render("boards/create.html");
}
// 글 생성 페이지에서 post 발생시 
const postCreate = (req,res) => {
   const { user_id, writer, title, content } = req.body;
   const now = new Date();
   const date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;

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

// 글 상세 페이지
const getView = (req,res) => {
    const { user_id } = req.params;
    const board = boards.find((board) => user_id === board.user_id)
    res.render("boards/view.html",{
        board
    });
}

// 글 수정 페이지
const getUpdate = (req,res) => {
    const { user_id } = req.params;
    const board = boards.find((board) => user_id === board.user_id)
    res.render("boards/update.html",{
        board
    });
}

// 글 수정 페이지에서 post 발생시

const postUpdate = (req,res) => {
    const { user_id } = req.params;
    const { writer, title, content } = req.body;
    const board = boards.find((board) => user_id === board.user_id);

    board.writer = writer;
    board.title = title;
    board.content = content;
    
    res.redirect(`/boards/view/${user_id}`);

}
module.exports = {
    getList,
    getCreate,
    postCreate,
    getView,
    getUpdate,
    postUpdate
};