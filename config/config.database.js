const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const url=process.env.DATABASE

mongoose.connect(url,{
    useNewUrlParser:true
})
.then(()=>{
    console.log('successfully connected to database')
})
.catch(err =>{
    console.log('couldnt connected to database'+err)
    process.exit();
})