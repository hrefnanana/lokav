var express = require('express');
var request = require("request");
var router = express.Router();
var fs	= require('fs'),
	_	= require('lodash');

function leit(value, cb) {
		//url = "http://api.yummly.com/v1/api/recipes?_app_id=92e09229&_app_key=cac7ebbcf3c99974ba11ea55be2ad2c6&"+value;
		var url= "https://notendur.hi.is/hro12/recipe.txt"
		request({
			uri: url,
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10,
			json: true
		}, function(error, response, body) {
			recipe = body;
			cb(recipe);
			console.log(recipe + "i request")
		});
	}

module.exports = router;

router.get('/leit/:type', function(req, res) {
	var type = req.params.type
	console.log(type);
	if(type=='american'){
		value = "&allowedCuisine[]=cuisine^cuisine-american"
		recipe = leit(value, function(recipe){
			res.render('leit', { recipe: recipe.matches});
		});
	}
  
});



