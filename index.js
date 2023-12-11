import express from "express"
const app = express()
const port = process.env.PORT || '3000'
const host = process.env.HOST || '127.0.0.1'
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