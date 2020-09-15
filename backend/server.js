var bodyParser = require('body-parser');
var dotEnv = require('dotenv');
dotEnv.config();
var database = require('./config/database.config');
var userRoutes = require('./app/routes/userData.route')
const port = process.env.PORT;

var express = require('express');
var app = express();

var cors = require('cors')
var app = express()
app.use(cors())

// app.use(function(req,res){
//     res.header('Access-Control-Allow-Origin', '*');});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user', userRoutes);
database.mongoose;

app.listen(port, () =>{
    console.log('Server listening on port' + port);
})