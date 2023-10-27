// // // dev=development means whatever the code you implamenting / project is in progress
// // // production = means once the website or lets say your server is live or hosted then it comes under the production level.


// // // fromaework
// // // library=> having a combination of diff. diff. module
// // // // modules abc => sum(a+b)  core modules, local modules, third party modules.
// // // // function
// // // // variable
// // // npm run dev


// // const a=10
// // const b=20
// // let c=a+b
// // console.log(c)
// // console.log("hello")

// // // REPL stands for 

// // // R- Read 
// // // E- evaluate
// // // P:print
// // // l:loop  > continues these three step // R- Read 
// // // E- evaluate
// // // P:print

// // // core modules: fs module, http module, os module, many more.


// const fs=require("fs")  // importing a core module and third party module is same  fs: file system module.
// // read, write, append, delete, rename files 
// // const localmodule=require("./package.json") // importing local module. you have to provide the path of that module.
// fs.writeFileSync("text.txt","this is our first value")  // acces token , refresh token , client Id 
// fs.writeFileSync("text.txt","this is our second value")  // it will over lapp the first text to optimise that we have to use another function
// fs.appendFileSync("text.txt","this is our appending data")// for appending the data without lossing first value.
// fs.renameSync("text.txt","data.txt") // for rename
// const details=fs.readFileSync("data.txt")
// console.log(details.toString())
// // fs.close("data.txt")
// fs.unlinkSync("data.txt")


// // const fs=require("fs")
// // const http =require(http)




// // const http = require('http'); // core module it is providing the set of functions and methods to execute the logic or program
// // // // const name=require("./data")
// // // const {hollywood}=require("./dummyData")

// // // // http://localhost:5355/post/comments
// // // // http://localhost:5355/comment
// // // // http://localhost:5355/
// // // // https://jsonplaceholder.typicode.com/albums

// // // // http methods: get post put delete
// // // // axios.post("http://localhost:5355/cretae")
// // // // get means you are performing the task as read operation // by default google url is get method
// // // // post means you want to create any specific resources or you want to store some data in database
// // // // put means you want to update any resources from the database
// // // // {name,phone,email}
// // // // delete the data

// // // // postman //
// // // // const names=JSON.stringify(name)

// // // const details=JSON.stringify(hollywood)
// // // const app = http.createServer((req, res) => {
// // //     console.log(req.url, 'fetch the path from base url');
// // //     if (req.url === '/post'&& req.method=="GET") {
// // //         res.write(details);
// // //         res.end();
// // //     } else if (req.url === '/comment' && req.method=="POST") {

// // //         res.write("<h1>what is nodejs</h1> "); // html tag
// // //         res.write("<p>nodejs</p>");
// // //         res.write("<h3>This is our h3 heading</h3>");  // res.send("kjghdgshs)
// // //         res.end();
// // //     }
// // //     } else {
// // //         res.write();
// // //         res.end();
// // //     }
// // // });

// // // app.listen(5355, () => {
// // //     try {
// // //         console.log('server is running on Port no 5355');
// // //     } catch (err) {
// // //         console.log('error occured during strating the live server:', err);
// // //     }
// // // });

// // // // http://localhost:4000
// // // // https://jsonplaceholder/posts

// // // Express:

// // const express = require('express');
// // const app = express();

// // const blogrouter=require("./router/blogRouter")
// // // const userRouter=require("./router/userRouter")
// // app.use("/api/main",blogrouter)  // middleware  /api/main/bollywood  , /api/main/hollywood
// // // app.use(userRouter)

// // app.listen(5355, () => {
// //     try {
// //         console.log('server is running in port :5355');
// //     } catch (err) {
// //         console.log(err, ': due to starting your server');
// //     }
// // });

// // // http://localhost:5355/comment
// // // app.get('/', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.get('/login', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.get('/signup', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.get('/logout', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.get('/resetPassword', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.get('/post', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.get('/bollywood', (req, res) => {
// // //     res.send('this is our home page');
// // // });
// // // app.post('/fitenss', (req, res) => {
// // //     //logic
// // //     res.send('successfully registered');
// // //     //logic
// // // });
// // // app.delete()
// // // app.put()

// // // app.listen(5355, () => {
// // //     try {
// // //         console.log('server is running in port :5355');
// // //     } catch (err) {
// // //         console.log(err, ': due to starting your server');
// // //     }
// // // });

// /**
//  * Application Level Middleware
//  * Routing Level middleware
//  * thirdParty Middleware
//  */
// const express = require('express');
// const categoryRouter = require('./routing/categorieRouting');
// const PORT = 5000;
// const app = express();
// const auth = require('./middleware/auth');
// const cors = require('cors'); // importing 3rd party middleware
// const { bollywood } = require('./dummyData');

// app.use(
//     cors({
//         origin: '*', // for accessing from anywhere
//     })
// );

// //or

// // app.use(cors({
// //     origin:["http://localhost:3000","http://localhost:3001","https://prepbytes.com"]  // giving permisssion to only specific Domain
// // }))

// const middlware1 = (req, res, next) => {
//     // middleware
//     console.log('middleware1 run first and the he is going to hit the API');
//     next();
// };
// // const middlware2 = (req, res, next) => {
// //     // middleware
// //     console.log('middleware2 run first and the he is going to hit the API');
// //     next();
// // };
// // const middlware3 = (req, res, next) => {
// //     // middleware
// //     console.log('middleware3 run first and the he is going to hit the API');
// // const age = 14;
// // if (age > 18) {
// //     next();
// // } else {
// //     res.send('user not allowed due to age');
// // }
// // };
// // app.use(auth);
// // app.use(middlware1); // Application level middleware
// // app.use(middlware2);
// // app.use(middlware3);

// app.use('/api', categoryRouter); //`http://localhost:5000/api/blog?category=${blog}&id=${id}`  // `http://localhost:5000/api/blog?category=bollywood`

// app.get('/api', (req, res) => {
//     // console.log(req.params.age);
//     console.log('home page ');
//     res.send(' API is running Fine');
// });

// app.get('/api/:id', (req, res) => {  // localhost:3500/api/8
// const id=req.params.id  // this is said to be url params for fetching a particular data.

// console.log(id)
// const data=bollywood.find(item=>item.id===id)
// console.log(data)
// });

// app.use("/api/dynamicComponent",categoryRouter)


// // app.get('/contact',middlware2, (req, res) => {  // specific level middleware
// //     console.log('contact page');
// //     res.send(' contact page is running Fine');
// // });
// // app.get('/aboutus',middlware3 ,(req, res) => {  //1 and 3
// //     console.log('contact page');
// //     res.send(' contact page is running Fine');
// // });

// app.listen(PORT, () => {
//     try {
//         console.log(`server is running fine in PORT No: -${PORT}`);
//     } catch (err) {
//         console.log(`Error occured during starting the server: - ${err}`);
//     }
// });
