'use strict';

var messages = [
	{message: 'string'},
	{message: 'string2'}
];

var express = require('express');

var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(function(request, response, next){
		response.setHeader('Access-Control-Allow-Origin', '*');
		response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		response.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});

app.get('/', function(request, response) {
	response.type('application/json');
	
	response.send(JSON.stringify(messages));
});

app.post('/', function(request, response){
	console.log(request.body);
	messages.push(request.body);
	response.send(request.body);
	// console.log(messages);
});

app.listen(8888);








// var onRequest = function (request, response) {
// 	if (request.method === 'GET') {
// 		response.writeHead(200, {
// 			'Connection': 'close',
// 			'Content-type': 'text/html',
// 			'Access-Control-Allow-Origin': '*'
// 		});
// 		response.end(JSON.stringify(messages));
// 	}
// 	if (request.method === 'POST') {
// 		var postData = '';
// 		request.on('data', function (chunk) {
// 			postData += chunk.toString();
// 		});
// 		request.on('end', function () {
// 			console.log('Type of postData:', typeof postData);
// 			console.log('Type of JSON.parse(postData):', typeof JSON.parse(postData));
// 			var msg = JSON.parse(postData);
// 			messages.push(msg);
// 			response.writeHead(200, {
// 				'Connection': 'close',
// 				'Content-type': 'text/html',
// 				'Access-Control-Allow-Origin': '*'
// 			});
// 			response.end(JSON.stringify(messages));
// 		});
// 	}
// 	if (request.method === 'OPTIONS') {
// 		response.writeHead(200, {
// 				'Connection': 'close',
// 				'Content-type': 'application/json',
// 				'Access-Control-Allow-Origin': '*',
// 				'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
// 				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
// 			});
// 		response.end("{}");
// 	}
// };

// http = require('http');
// var port = 10000;
// http.createServer(onRequest).listen(port);











