import { Router } from "express";
import imageController from "../controller/imageController.js";
import upload from "../uploudImg.js";

const imageRoute=Router()
imageRoute.post('/uploadImg',upload.single('image'),imageController.upload)

export default imageRoute