const express = require("express");
const app = express();
const path = (`${__dirname}/views/boards`);
const nunjucks = require("nunjucks");
const boardsRouter = require(`./router/boards.router.js`);

//json을 파싱하겠단 설정
app.use(express.json());  
// 언랭코디드를 파싱해서 가져오겠다는 설정
app.use(express.urlencoded({ extended: false }));
// router를 사용할건데 공통 엔드 포인트는 /boards를 사용하겠다.
app.use("/boards", boardsRouter);
// 넌적스와 익스프레스를 연결(템플린엔진 사용)
app.set("view engine", "html");
nunjucks.configure("views", {
    express: app
})

// 정적파일을 불러오는 static 설정
app.use(express.static(`${path}/public`));


// "/" 요청시 메인페이지인 index.html 응답
app.get("/", (req,res) => {
    res.sendFile(`${path}/index.html`)
})

app.listen(3000, () => {
    console.log("월별평가의 시계는 돌아간다..!");
})