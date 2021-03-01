const express = require('express')
const application = express()
const bodyParser = require('body-parser')
const cors = require('cors');
require('./connection')
application.use(cors());
application.options('*', cors());


application.use(bodyParser.json())

const scoreRoute = require('./routes/scores');
application.use("/api/",scoreRoute)

application.listen("8000", () =>{
	console.log("server started")
})