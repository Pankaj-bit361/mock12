const express=require("express")
const { JobModel } = require("../models/job.model")

const JobRoute=express.Router()




JobRoute.post("/", async (req,res)=>{

try {
    let newuser=new JobModel(req.body)
    await newuser.save()
    res.status(200).send({"msg":"new job is created"})
} catch (error) {
    res.status(401).send({"msg":error.message})
}

})




JobRoute.get("/", async (req,res)=>{

    let {role,language,postedAt,page}=req.query
  
const query={}

if(role){
    query.role=role
}
if(language){
    query.language=language
}
if(page<=1){
    page=1
}
console.log(query)
let skippage=(page-1)*10
console.log(skippage)
try {
    let users=await JobModel.find(query).sort({postedAt:postedAt}).skip(skippage).limit(10)
    res.status(200).send(users)
} catch (error) {
    res.status(400).send(error)
}

    
    })


module.exports={
    JobRoute
}