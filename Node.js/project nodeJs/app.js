import express from "express";
import userRouter from "./router/userRouter.js";
import mongoose from "mongoose";
import recipeRoter from "./router/recipeRouter.js";
import cors from 'cors'
import dotenv from 'dotenv'
import imageRoute from "./router/imageRouter.js";
dotenv.config()

const app=express()
// process.env.PORT
app.listen( process.env.PORT||1234,()=>{
    console.log("run!!!!!!!!!!");
})
app.use(express.static('public'))
app.use(cors())
app.use(express.json());
app.use('/Users',userRouter)
app.use('/Recipe',recipeRoter)
app.use('/Image',imageRoute)

mongoose.connect('mongodb://0.0.0.0:27017/ProjectRecipe')
.then(x=>{
    console.log("connect mongo!!!");
    
})
.catch(err=>{
        console.log("err");

})