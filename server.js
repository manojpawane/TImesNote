var express = require('express')
const userRoute = require('./app/routes/user.route')
const noteRoute = require('./app/routes/note.route')
var bodyParser = require('body-parser')
require('dotenv').config();
const port = process.env.PORT
const app = express();
const database = require('./config/config.database')
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/user',userRoute)
app.use('/note',noteRoute)
database.mongoose;
app.listen(port, () => {
console.log("Server is listening on port " + port);
});