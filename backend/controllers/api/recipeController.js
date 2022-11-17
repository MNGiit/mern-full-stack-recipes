const jwt = require('jsonwebtoken'); // Import jwt
const User = require('../../models/userModel'); // Import User
const Recipe = require('../../models/recipeModel'); // Import Recipe
// const bcrypt = require('bcryptjs'); // Import bcrypt

// handle create-user route
exports.createRecipe = async (req, res) => {
    try {
        console.log("recipeController createRecipe, req.body", req.body);

        const ings = [];
        for(let i = 0; i < req.body.ingredients.length; i++){
            ings.push({name: req.body.ingredients[i]})
        }

        console.log("ings", ings);

        const recipe = await Recipe.create({
            name: req.body.name,
            // email: req.body.email,
            ingredients: ings
            
        })

        // Send JSON RESPONSE
        res.status(201).json({
            status: "success",
            data: {
                recipe
                // newRecipe,
                // token,
            },
        })
    } catch (error) {
        console.log("recipeController createRecipe error", error);
        res.status(500).json({
            status: "error",
            error: error,
        })
    }
}


// router.route('/').get('/', (rq, res) => {
//     // find all recipes by user
//     // or find all recipes
//     // Recipe.find().then((recipes) => {
//     //     console.log(recipes);
    
//     // })
// })

exports.getRecipes = async (req, res) => {
    // console.log("recipeController getting all recipes");
    // recipes = Recipe.find();
    
    
    
    // const recipes = await Recipe.find({});
    // console.log("recipeController recipes found", recipes);
    // res.status(200).json(recipes);
    // return res.status(200).json(recipes);

    try {
        const recipes = await Recipe.find({});
        console.log("recipes controller", recipes);

        if (!recipes) {
            throw new Error("Couldn't get recipes...");
        }
        // Send response
        res.status(200).json({
            status: "success",
            data: {
                recipes,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
        });
    }
}

exports.getRecipesDifferentWayCont = async (req, res) => {
    try {
        const recipes = await Recipe.find({});

        res.status(201).json({
            status: "success",
            data: recipes
        })
    } catch (error) {
        console.log("getRecipesDifferentWayCont", error);
        res.status(500).json({
            status: "error",
            error: error
        })
    }
}

// Define a route handler for retrieving the a single recipe
exports.getRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)
        // Assuming no recipe if found with that id
        if (!recipe) {
            throw new Error("No recipe found with that id")
        }
        // Send response
        res.status(200).json({
            status: "success",
            data: {
                recipe,
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
        });
    }
}

exports.editRecipe = async (req, res) => {
    try {

    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.message,
        });
    }
}

exports.deleteRecipe = async (req, res) => {
    try {

    } catch (error) {
        res.status(404).json({
            status: "fail to delete",
            message: error.message,
        });
    }
}

// Route for logging in user
// exports.login = async (req, res) => {
//     try {

//         const { email, password } = req.body

//         // Assuming email or password was not provided
//         if (!email || !password) {
//             throw new Error("Email and password are required fields");
//         }

//         // Find user by email address
//         const user = await User.findOne({ email }).select('+password');

//         // Throw error if user not found
//         if (
//             !user ||
//             !(await user.comparePassword(password, user.password))
//         ) {throw new Error("Invalid email or password");
//         }
//         const newUser = ({
//             name: user.name,
//             email: user.email
//         })

//         const token = await jwt.sign(
//             { id: newUser._id },
//             process.env.JWT_SECRET_KEY,
//             { expiresIn: process.env.JWT_EXPIRATION_DATE }
//         )

//         // Send JSON RESPONSE
//         res.status(201).json({
//             status: "success",
//             data: {
//                 newUser,
//                 token,
//             },
//         })
//         // res.status(200).json(getUser(user));
//     } catch (e) {

//         res.status(400).json({ msg: e.message, reason: 'Bad credentials!' })
//     }
// }