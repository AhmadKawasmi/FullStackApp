import express from "express"
import greetRouter from "./greet/greet.api"
import userRouter from "./user/user.api"


const v1Router = express.Router()

v1Router.use('/greet', greetRouter)
v1Router.use('/user', greetRouter)


export default v1Router