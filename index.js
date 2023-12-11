import express from "express"
import db from "./middlewares/db.js"
import dotenv from "dotenv"
import web from "./routes/web.js"
dotenv.config()
const app = express()
const port = process.env.PORT || '3000'
const host = process.env.HOST || '127.0.0.1'

db(process.env.DB_URL)

app.use('/api/student',web)

app.get('/',(req,res)=>{
    res.status(200).send({"status":"success"})
})

app.listen(port,()=>{
    try {
        console.log(`server is listening at http://${host}:${port}`)
    } catch (err) {
        console.log(err)
    }
})