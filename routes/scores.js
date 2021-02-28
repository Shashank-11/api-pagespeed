const express = require('express');

const router = express.Router();

const Score = require('../models/scores.model')
const request = require("request");

// get all the posts
router.get('/', async (req, res)=>{
	try {
		const scores = await Score.find()
		res.json(scores)
	}
	catch(err){
		res.json({message: err.message})
	}
})

// Store score of the url into the DB
// Put the url for mongodb connection
// For example: PAGESPEED_API_KEY= AIzaSy***********
router.post('/score', (req, res)=>{
	const url = req.body.url
	const options = "&fields=lighthouseResult%2Fcategories%2F*%2Fscore&prettyPrint=false&strategy=mobile&category=performance&category=pwa&category=best-practices&category=accessibility&category=seo"
	request('https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=' + url + options +'&key=' + process.env.PAGESPEED_API_KEY, { json: true }, (err, response, body) => {
			if (err) {
					res.json({
							'status': 'error',
							'message': err
					})
			} else {
						const scores = new Score({
							url: req.body.url,
							score: body
						})
						
						scores.save().then(data=>{
							res.json(data)
						})
						.catch(err =>{
							res.json({message: err})
						})
			}
	});

})

// get specific post
router.get('/score', async(req, res)=>{
	try {
		const score = await Score.find({ url: req.query.url, date: req.query.date })
		res.json(score)
	}
	catch(err){
		res.json({message: err.message})
	}
})

module.exports = router;