var app = require('express').createServer();
var url = require('url');
app.get('/*' , function(req , res){
	var urlObj = url.parse(req.url);
	console.log(urlObj);
});
app.listen(8800);
