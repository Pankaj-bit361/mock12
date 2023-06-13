const express=require("express")
const { connection } = require("./db")
const { JobRoute } = require("./routes/job.routes")
require("dotenv").config()
const cors=require("cors")
const app=express()

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("welcome to the HomePage")
})
 app.use("/jobs",JobRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connnect to database")
    } catch (error) {
        
    }
    console.log("connected to the port")
})