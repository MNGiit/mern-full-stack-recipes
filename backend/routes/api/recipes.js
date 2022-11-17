const express = require('express'); // Import express in order to create routers
// const userController = require('../../controllers/api/userController'); // Import user controller
const recipeController = require('../../controllers/api/recipeController'); // Import recipe controller
const Recipe = require('../../models/recipeModel');
const router = express.Router(); // Use express to create a router

// Use router to redirect to different controller depending on the method
// router.route('/').post(userController.createUser);
// router.route('/:id').get(userController.getUser);


// Use router to redirect to different controller depending on the method
// router.route('/').get('/', (rq, res) => {
//     // find all recipes by user
//     // or find all recipes
//     // Recipe.find().then((recipes) => {
//     //     console.log(recipes);
    
//     // })
// })
router.route('/').get(recipeController.getRecipes);

router.route('/').post(recipeController.createRecipe); // Create
router.route('/:id').get(recipeController.getRecipe); // Read
// Update
// Destroy


// Export router to be used in other parts of application
module.exports = router;