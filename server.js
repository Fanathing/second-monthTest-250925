const express = require("express");
const app = express();
const path = (`${__dirname}/views/boards`)

app.get("/", (req,res) => {
    res.sendFile(`${path}/index.html`)
})

app.listen(3000, () => {
    console.log("월별평가의 시계는 돌아간다..!");
})