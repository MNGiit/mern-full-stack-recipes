const express = require('express'); // Import express in order to create routers
const userController = require('../../controllers/api/userController'); // Import user controller
const router = express.Router(); // Use express to create a router

// Use router to redirect to different controller depending on the method
router.route('/').post(userController.createUser);
router.route('/:id').get(userController.getUser);

router.route('/login').post(userController.login);

// Export router to be used in other parts of application
module.exports = router;