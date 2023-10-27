const jwt=require("jsonwebtoken")
const secret_key = 'akarsh';
const auth = (req, res, next) => {
   const BearerToken= req.headers["authorization"]
 if(BearerToken){
    const token=BearerToken.split(" ")[1];  // we will split our bearer token
   const validate= jwt.verify(token,secret_key);
   if(validate){
    next();
   }
   return res.send({msg:"user not authorized"})
 }
 return res.send({msg:"user not allowed"})
};
module.exports = auth;




































// const jwt = require('jsonwebtoken');
// const seceretKey = 'akarsh';
// const auth = (req, res, next) => {
//     const bearerToken = req.headers['authorization'];
//     if (bearerToken) {
//         const token = bearerToken.split(' ')[1];
//         const validate = jwt.verify(token, seceretKey);
//         if (validate) {
//             next();
//         }
//     }
//         return res.send({ msg: 'user not authorized' });
// };

// module.exports = auth;
