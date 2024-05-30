import express from "express"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
const app = express()
app.use(express.json())
dotenv.config()
app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)
app.use(cookieParser())
app.listen(8000, () => {
     console.log("running")
})