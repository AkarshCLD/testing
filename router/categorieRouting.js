const auth=require("../middleware/auth")
const {bollywoodController, hollywoodController, fitnessController } = require('../controller/categoryController');
const categoryRouter = require('express').Router();
// categoryRouter.get('/bollywood/:id',bollywoodController );
// categoryRouter.get('/hollywood/:id',hollywoodController);
// categoryRouter.get('/fitness/:id',fitnessController);
categoryRouter.get("/blog",bollywoodController)
module.exports = categoryRouter; // default export;


// bollywood 8 req.query.category // http://localhost:3000/api?category="bollywood"