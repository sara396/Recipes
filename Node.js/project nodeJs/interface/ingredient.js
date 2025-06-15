
import mongoose from "mongoose";

const ingredientSchena =  mongoose.Schema({
    name: { type: String, require: true },
    amount: { type: Number, require: true }
})

export default ingredientSchena