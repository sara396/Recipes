import mongoose from "mongoose";

const UserModel = mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    nameUser: {
        type: String,
        required: true,
        validator: (value) => {
            value != ""
            throw new Error("the value cant be empty ")
        }
    },
    password: {
        type: String,
        required: true,
        validator: (value) => {
            value != ""
            throw new Error("the value cant be empty ")
        }
    },
    address: {
        type: String,
        required: false,
        // validator: (value) => {
        //     value != ""
        //     throw new Error("the value cant be empty ")
        // }
    },
    phone: {
        type: String,
        required: false,
        // validate: {
        //     validator: (value) => {
        //         value != ""
        //         throw new Error("the value cant be empty ")
        //     }
        // }
    }
    ,
    isManager: {
        type: Boolean,
        required: true,
        validator: (value) => {
            value != ""
            throw new Error("the value cant be empty ")
        }
    },
    favoriteRecipe: {
        type: [mongoose.Schema.ObjectId],
        required: false,
        default: []
        // ,
        // ref:'recipeCollection'
    }
})

export default mongoose.model('userCollection', UserModel)