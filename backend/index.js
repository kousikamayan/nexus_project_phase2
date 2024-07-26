const port =4000
const express=require("express");
const app=express();
const mongoose =require("mongoose");
const jwt=require("jsonwebtoken")
const path=require("path")
const cors =require("cors");
const { error } = require("console");
const { type } = require("os");

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://kousikamayan06:fpctTpHkBFVLTWpN@cluster0.2ikvnok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("Express AApp is running")
})

//Schema

const Users=mongoose.model("UsersDetails",{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
})

//registering the user
app.post('/sendmessage',async(req,res)=>{

    const user=new Users({
        name:req.body.name,
        email:req.body.email,
        subject:req.body.subject,
        message:req.body.message
    })
    await user.save()
    console.log("saved")
    res.json({
        success:true,
        name:req.body.name
    })
    // const data={
    //     user:{
    //         id:user.id,

    //     }
    // }
    // const token=jwt.sign(data,'secret')
    const data={
        user:{
            id:user.id,

        }
    }
    const token=jwt.sign(data,'secret_nexus')
    res.json({success:true,token})
})



//api for getting all data
app.get('/alldata',async(req,res)=>{
    let datas=await Users.find({});
    res.status(200).json(datas)
})
const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid valid"})
    }
    else{
        try{
            const data=jwt.verify(token,'secret_nexus');
            req.user=data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"please authenticate using avalid token"})

        }
    }

 }

app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port"+port)
    }
    else{
        console.log("error"+error)
    }
})