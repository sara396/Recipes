import { Router } from "express";
import userController from "../controller/userController.js";
import bodyParser from "body-parser";
import userMiddleWare from "../middleWare/userMiddleWare.js";

const userRouter=Router();
userRouter.use(bodyParser.json())
userRouter.get('/GetAllUsers',userController.getAll)
userRouter.post('/AddUser',userMiddleWare.writeInTextNewUser,userController.add)
// userRouter.get('/GetUserByPassAndName/:nameUser/:password',userController.getByNameAndPass)
userRouter.get('/GetUserByPassAndName/:name/:pass',userController.getByNameAndPass)
userRouter.get('/getAllFevoriteRecipe/:_id',userController.getAllFevoriteRecipe)

userRouter.post('/addToFevoriteRecipe/:_id/:recipeId',userController.addToFevoriteRecipe)


export default userRouter
