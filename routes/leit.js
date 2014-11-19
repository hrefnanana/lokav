var express = require('express');
var request = require("request");
var router = express.Router();
var fs	= require('fs'),
	_	= require('lodash');

recipe = ""
url = "http://api.yummly.com/v1/api/recipes?_app_id=92e09229&_app_key=cac7ebbcf3c99974ba11ea55be2ad2c6&q=onion+soup"
request({
  uri: url,
  method: "GET",
  timeout: 10000,
  followRedirect: true,
  maxRedirects: 10,
  json: true
}, function(error, response, body) {
	recipe = body;
});
 //stöff

/*
function fetch(url, callback) {
	fs.readFile(url, 'utf8', function (err, data) {
		if (err) {
			console.log("Error!", err);
			throw err;
		}
		var json = JSON.parse(data);
		callback(json);
		console.log(json);
	});
}

fetch('recipes.json', function(data) {
	var short = _.filter(data.matches, function(recipe) {
		return recipe.totalTimeInSeconds < 3000;
	});

	console.log(_.pluck(short, 'recipeName'));
});*/

module.exports = router;

router.get('/leit', function(req, res) {
  res.render('leit', { recipe: recipe.matches});
});



