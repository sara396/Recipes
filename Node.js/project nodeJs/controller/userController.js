
import sendWelcomeEmail from "../mailer.js";
import recipeModel from "../model/recipeModel.js";
import userModel from "../model/userModel.js"

const userController = {
    getAll: (req, res) => {
        console.log("getAll endpoint hit");
        userModel.find().then((dataUser) => { res.status(200).json(dataUser) })
            .catch((err) => { res.status(500).json(err.message) })
    }
    ,

    add: (req, res) => {
        try {
            const user = new userModel(req.body);
            user.save()
                .then(async m => {
                    res.status(200).json(true);

                    //     try {
                    //     // שליחת מייל
                    //     await sendWelcomeEmail('s0534167916@gmail.com', m.nameUser);
                    //     res.status(200).json(true);
                    // } catch (mailError) {
                    //     console.error("Failed to send email:", mailError);
                    //     // אפשר להחזיר הצלחה בהרשמה גם אם המייל לא נשלח
                    //     res.status(200).json({
                    //         success: true,
                    //         message: "User saved but failed to send email"
                    //     });
                    // }
                })
                .catch(err => {
                    // בדיקה האם מדובר בשגיאת מפתח כפול
                    if ((err.message && err.message.includes("E11000"))) {
                        res.status(409).json("A user with this ID already exists");
                    } else {
                        res.status(500).json(err.message);
                    }
                });
        } catch (error) {
            res.status(404).json(error);
        }
    },


    getByNameAndPass: (req, res) => {
        const { name, pass } = req.params
        userModel.findOne({ nameUser: name, password: pass })
            .then(user => {
                if (!user) { res.status(401).json("didnt find"); }
                else { res.status(200).json(user); }
            })
            .catch(error => { res.status(500).json(error); });

    },
    getAllFevoriteRecipe: (req, res) => {
        console.log("innnn");

        userModel.findById(req.params._id)
            .then(user => {
                console.log("user", user);

                if (!user)
                    return res.status(404).json("user not found")
                return recipeModel.find({ _id: { $in: user.favoriteRecipe } }, "recipeName")
                    .then(recipeNames => {
                        console.log("recipeNames:", recipeNames);
                        const names = recipeNames.map(n => n.recipeName)
                        res.status(200).json(names)
                    })
                    .catch(err => res.status(500).json(err))
            })
            .catch(err => res.status(500).json(err))
    },
    addToFevoriteRecipe: (req, res) => {
        console.log("req.params._id");

        console.log(req.params._id);

        userModel.findById(req.params._id)
            .then(user => {
                if (user.favoriteRecipe.includes(req.params.recipeId))
                    res.status(404).json("this recipe is exists")
                user.favoriteRecipe.push(req.params.recipeId)
                user.save()
                res.status(200).json(true)
            })
            .catch(err => res.status(500).json("recipe didnt found"))
    },

}

export default userController