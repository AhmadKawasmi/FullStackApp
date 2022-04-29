import express from "express"

const greetRouter = express.Router()

greetRouter.get("/", function(req, res) {
    res.send("hello world!")
})

greetRouter.post("/", function(req, res) {

    const { body, headers } = req

    console.log(headers.name + "says" + body.msg);
    res.send("thanks for your massage")
})


export default greetRouter