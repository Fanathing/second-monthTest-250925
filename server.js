const express = require("express");
const app = express();
const path = (`${__dirname}/views/boards`);
const nunjucks = require("nunjucks");
// 언랭코디드를 파싱해서 가져오겠다는 설정
app.use(express.urlencoded({ extended: false }));

const boardsRouter = (`./router/boards.router.js`);

app.use("/boards", boardsRouter)

// 넌적스와 익스프레스를 연결(템플린엔진 사용)
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app
})

// "/" 요청시 메인페이지인 index.html 응답
app.get("/", (req,res) => {
    res.sendFile(`${path}/index.html`)
})

app.listen(3000, () => {
    console.log("월별평가의 시계는 돌아간다..!");
})