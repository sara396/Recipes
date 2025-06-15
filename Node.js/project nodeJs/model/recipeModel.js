import mongoose from "mongoose";
import ingredientSchena from "../interface/ingredient.js";
import recipeValidate from "../validator/recipeValidate.js";

const recipeModel = mongoose.Schema({
    recipeName: {
        type: String,
        required: true,
        // validator: (value) => {
        //     value != ""
        //     throw new Error("the value cant be empty ")
        //     console.log("throw new Error(the value cant be empty )");
            
        // }
    },
    pic: {
        type: String,
        required: false
    }
    ,
    level: {
        type: String,
        required: false,
    }
    , time: {
        type: String,
        required: true
    }
    , type: {
        type: String,
        required: true,
        // validate: {
        //     validator: (value) => {
        //         recipeValidate.typeValidate(value)
        //         value != ""
        //         throw new Error("the value cant be empty ")
        //     }
        // }
    }
    , userCode: {
        type: String,
        ref: 'userCollection'
    }
    , ingredient: {
        type: [ingredientSchena],
        required: false
    }

})

export default mongoose.model('recipeCollection', recipeModel)