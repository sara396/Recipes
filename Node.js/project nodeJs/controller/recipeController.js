import recipeModel from "../model/recipeModel.js"
import { ObjectId } from 'mongodb';
import userModel from "../model/userModel.js";

const recipeController = {

    getAll: (req, res) => {
        try {
            recipeModel.find()
                .then(dataRecipe => { res.status(200).json(dataRecipe) })
                .catch(err => { res.status(500).json(err.message) })
        }
        catch (error) { res.status(404).json(error) }
    },

    getById: (req, res) => {
        try {
            console.log("angolar");
            console.log(req.params.id);
            recipeModel.findById(req.params.id)
                .then(obj => { res.status(200).json(obj) })
                .catch(err => { res.status(500).json(err.message) })

        }
        catch (error) { res.status(404).json(error) }
    }
    ,

    post: (req, res) => {
        userModel.findOne({ _id: req.body.userCode })
            .then(user => {
                if (!user)
                    return res.status(404).json("didnt have this user")
                const recipe = new recipeModel(req.body)
                recipe.save()
                    .then(x => { res.status(200).json(true) })
                    .catch(err => { res.status(500).json(err.message) })
            })
            .catch(error => { res.status(404).json(error) })
    },



    //שולחים בלי האם זה מנהל
    delete: (req, res) => {
        try {
            console.log("1");
            recipeModel.findById(req.params._id)
                .then(recipe => {
                    if (recipe.userCode === req.params.userCode)
                        recipe.deleteOne()
                            .then(x => { res.status(200).json({ "delete": true }) })
                            .catch(err => { res.status(500).json(err.message) })
                    else {
                        userModel.findOne({ _id: req.params.userCode })
                            .then(obj => {
                                if (obj.isManager) {
                                    recipe.deleteOne()
                                        .then(x => { res.status(200).json({ "delete": true }) })
                                        .catch(err => { res.status(500).json(err.message) })
                                }
                                else { res.status(500).json("you cant' delete") }
                            })
                            .catch(err => { res.status(500).json(err.message) })
                    }
                })
                .catch(err => { res.status(500).json("didnt find this recipe") })
        } 
        catch (error) { res.status(404).json(error.json) }
    }
    ,


    // delete: async (req, res) => {
    //     try {
    //         console.log("1");
    //         const recipe = async(recipeModel.findById(req.params._id))
    //         if (!recipe)
    //             res.status(500).json("didnt find this id")
    //         if (recipe.userCode === req.params.userCode) {
    //             const isDell = async(recipe.deleteOne())
    //             !isDell ? res.status(500).json("didnt succes to delete") : res.status(200).json({ "delete": true })
    //         }
    //         else {
    //             const user = async(userModel.findOne({ _id: req.params.userCode }))
    //             console.log("1");
    //             if (user == null) {
    //                 console.log("2");

    //                 res.status(500).json("didnt find this id")
    //             }
    //             if (user.isManager === true) {
    //                 console.log("3");
    //                 const isDell = async(recipe.deleteOne())
    //                 !isDell ? res.status(500).json("didnt succes to delete") : res.status(200).json({ "delete": true })
    //             }
    //             else {
    //                 console.log("4");

    //                 res.status(500).json("you cant' delete")
    //             }
    //         }
    //     }
    //     catch (error) { res.status(404).json("!!!!!!!!!!!!!") }
    // }
    // ,

    postAndUpdate: (req, res) => {

        const recipeName = req.body.recipeName
        const userCode = req.body.userCode
        const update = req.body

        // בשביל הקבצים
        // if (req.pic)
        //     update.pic = req.originalname

        if (req.file) {
            update.pic = `uploud/${req.file.filename}`;
        }

        //  if (req.pic)
        //     update.pic = `public/uploud/${req.originalname}`  
        


        const options = {
            new: true,    // להחזיר את המסמך המעודכן (או החדש)
            upsert: true // אם לא קיים, ליצור חדש
        }
        if (recipeName.trim() == "")
            return res.status(500).json("name cant be with empty value ")
        if (req.body.type.trim() == "")
            return res.status(500).json("type cant be with empty value ")
        // בדפוס לוגים לעקוב אחרי בעיות
        console.log("POST new recipe:", update);
        userModel.findOne({ _id: req.body.userCode })
            .then(user => {
                if (!user)
                    return res.status(404).json("didnt have this user")
                else {
                    const recipe = recipeModel.findOneAndUpdate({ recipeName, userCode }, update, options)
                        .then(x => { return res.status(200).json(x) })
                        .catch(err => { return res.status(500).json(err) })
                }
            })
            .catch(error => { return res.status(500).json(error) })
    }
}

export default recipeController