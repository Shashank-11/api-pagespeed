const express = require('express')
const application = express()
const bodyParser = require('body-parser')
require('./connection')

application.use(bodyParser.json())

const scoreRoute = require('./routes/scores');
application.use("/api/",scoreRoute)

application.listen("8000", () =>{
	console.log("server started")
})