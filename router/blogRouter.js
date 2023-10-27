const blogrouter = require('express').Router();

blogrouter.get('/bollywood', (req, res) => {
    res.send({
        "userId": 1,
        "id": 1,
        "title": 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        "body": 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    });
});
blogrouter.get('/hollywood', (req, res) => {
    res.send('this is our hollywood page');
});
blogrouter.get('/fitenss', (req, res) => {
    res.send('this is our fitenss page');
});
blogrouter.get('/sports', (req, res) => {
    res.send('this is our sports page');
});
module.exports = blogrouter;

