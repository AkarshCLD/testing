const array = []; // database
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // import the jwt
const secret_key = 'akarsh';

const register = (req, res) => {
    const data = req.body;
    const details = array.find((item) => {
        if (item.email === data.email) {
            return item;
        }
    });
    if (details) {
        return res.send({ msg: 'user already registered with this account' });
    }
    const hashpassword = bcrypt.hashSync(data.password, 10); // saltround some random string +symbol+number+password
    // // console.log(hashpassword)
    const tempobject = {
        email: data.email,
        password: hashpassword,
    };
    array.push(tempobject); // data is saved in our database
    const token = jwt.sign({ useremail: data.email }, secret_key,{expiresIn:"7 d"}); // for generating the jwt token
    console.log(token);
    res.send({ msg: 'user Registered', token: token });
};

const login = (req, res) => {
    const logindata = req.body;
    const details = array.find((item) => {
        if (item.email === logindata.email) {
            return item;
        }
    });
    if (details) {
        const validate = bcrypt.compareSync(logindata.password, details.password); // true or false
        if (validate) {
            const token = jwt.sign({ useremail: logindata.email }, secret_key,{expiresIn:"360000"}); // for generating the jwt token
            console.log(token);
            return res.send({ msg: 'user login successfully', token: token });
        } else {
            return res.send({msg:'user password is wrong'});
        }
    } else {
        console.log('email is wrong');
        return res.send({ msg: 'email is wrong' });
    }
};

module.exports = { register, login };

// data

// // axios.post("baseurl",data)

// const [data, setData] = useState({
//     name: '',
//     email: '', day
// });

// data = {
//     name: 'kjdhgshd',
//     email: 'cdgsfdatr',
// };

// const submit = () => {
//     console.log(data);
//     axios.post('http://localhost:3001/api/register', data).then((res) => {alert(res.data.msg),localstorage.setItem("token",res.data.token), navigate("/home")});
// };
