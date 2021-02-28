const mongoose = require('mongoose');
require('dotenv/config')

// Put the url for mongodb connection
// For example: DB_CONNECTION= mongodb://localhost:27017/Scores

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, (error) =>{
	if(!error){
		console.log("Database connected")
	}
	else {
		console.log("Error in  connection");
	}
})