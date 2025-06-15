import { Router } from "express";
import recipeController from "../controller/recipeController.js";
import bodyParser from "body-parser";
import uploud from "../middleWare/uploudMiddleWere.js";

const recipeRoter=Router()
recipeRoter.use(bodyParser.json())

recipeRoter.get('/GetAllRecipe',recipeController.getAll)
recipeRoter.get('/GetRecipeById/:id',recipeController.getById)

recipeRoter.put('/postAndUpdate',recipeController.postAndUpdate)
//בשביל הקבצים
recipeRoter.put('/postAndUpdate',uploud.single('pic'),recipeController.postAndUpdate)

// recipeRoter.delete('/DeleteRecipeByIdAndPassword/:_id/:userCode',recipeController.delete)
// recipeRoter.delete('/DeleteRecipeByIdAndPassword/:_id/:userCode/:isManager',recipeController.delete)

//אין צורך 
recipeRoter.post('/PostRecipe',recipeController.post)

export default recipeRoter