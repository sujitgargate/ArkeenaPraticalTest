var mongoose = require('mongoose');
var dotEnv = require('dotenv');
dotEnv.config();

const dataBaseUrl = process.env.DATABASE;

mongoose.connect(dataBaseUrl, {
    useNewUrlParser:true
})

.then(() =>{
    console.log('Sucessfully connected to database');
})

.catch(error => {
    console.log('Error occured while connecting to database' + error);
    process.exit();
})