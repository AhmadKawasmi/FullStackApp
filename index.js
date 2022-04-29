import mongoose from "mongoose";
import express from "express";
import router from "./src/api";

const app = express()

app.use(express.json())
app.use('/api', router)

const PORT = 3001

app.listen(PORT, function() {
    console.log("up and running on port " + PORT);
})