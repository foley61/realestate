import express from "express"

const app = express()
console.log("test")

app.listen(8000, () => {
     console.log("running")
})