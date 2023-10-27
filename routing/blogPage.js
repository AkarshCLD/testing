const { hollywoodController } = require('../controller/categoryController');
const auth = require('../middleware/auth');

const blogRouter = require('express').Router();

blogRouter.get('/', auth, (req, res) => {
    res.send('this is our home page');
});
blogRouter.get('/bollywood', auth, (req, res) => {
    res.send('bollywood');
});
blogRouter.get('/bollywood', auth, (req, res) => {
    res.send('bollywood');
});
blogRouter.get('/bollywood', auth, (req, res) => {
    res.send('bollywood');
});
blogRouter.get('/bollywood', auth, (req, res) => {
    res.send('bollywood');
});
blogRouter.get('/bollywood', auth, (req, res) => {
    res.send('bollywood');
});
module.exports = blogRouter;
try{

}

catch(err){
    console.log(err)
}