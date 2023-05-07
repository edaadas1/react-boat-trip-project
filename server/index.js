const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const database = require('./config/database.js');
const User = require('./routes/User.js')

dotenv.config();

const app = express();
app.use(bodyParser.json({limit: "30mb",extended : true}))
app.use(bodyParser.urlencoded({limit: "30mb",extended : true}))
app.use(cors());

app.use('/',User)

const PORT = 5000;

database()

app.listen(PORT, ()=>{
    console.log("server is running on port",PORT)
})
