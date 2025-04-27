import express from "express"
import cors from "cors"

const app = express();
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended: true,
    limit: "16kb"

}))

app.use(express.static("public"));

// app.get("/api/chat", (req,res) => {
//     res.send("hello bro!");
// })

//routes import
import userRouter from "./routes/chat.routes.js"

//router declaration
app.use("/api", userRouter);

export { app }