const express = require('express');
const userRouter = require('./routing/userRouter');
const blogRouter = require('./routing/blogPage');
const app = express();
const cors=require("cors");
app.use(express.json()) // body parser
app.use(cors())

app.use("/api",userRouter)
app.use("/",blogRouter)
app.listen(4000, () => {
    console.log(`Serevr is runing Fine`);
});
