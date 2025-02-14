const express = require('express');
const morgan=require('morgan');
const app = express();

app.use(morgan('dev'));

const isLoggedIn = (req,res,next) => {
        console.log('isLoggedIn middleare');
        next();
};

app.get('/',(req,res) => {res.status(200).send({ message:'welcome to the server'});
}); 

app.get('/api/user',isLoggedIn,(req,res) => {res.status(200).send({ message:'user profile is returned'});
}); 

app.listen(3001,()=>{console.log(`server is runing at http://localhost:3001`);

});