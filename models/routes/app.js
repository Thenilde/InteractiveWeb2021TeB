const express=require('express') //created the express packet
const app=express();//executed code
const mongoose=require('mongoose')//Code that is going to connect db
const bodyParser=require('body-parser');
const cors=require('cors');
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute=require('./routes/posts');

app.use('/posts',postsRoute);


//Routes

app.get('/',(req,res)=>{
    res.send('We are on home');
});


//Connect to DB

mongoose.connect(
process.env.DB_CONNECTION,
{useNewUrlParser:true },
()=> console.log('connected to DB  T Borges!')
);

//Port name to listening to the server
app.listen(3000);