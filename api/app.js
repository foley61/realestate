import express from "express"
import postRoute from "./routes/post.route.js"
import authRoute from "./routes/auth.route.js"
import testRoute from ".routes/test.route.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"

const app = express()
app.use(cors({origin: process.env.CLIENT_URL, credentials:true}))
app.use(express.json())
dotenv.config()
app.use("/api/posts",postRoute)
app.use("/api/auth",authRoute)
app.use("/api/test",testRoute)
app.use(cookieParser())
app.listen(8000, () => {
     console.log("running")
})