//this file is exactly the same as other basic
// servers you've made except that the app.listen has a callback.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('static'));

app.use(bodyParser.json()); // for parsing application/json

app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

var bugData = [{
  id: 1,
  status: "ongoing",
  priority: "high",
  owner: "george",
  title: "bug1"
}, {
  id: 2,
  status: "finished",
  priority: "medium",
  owner: "rob",
  title: "bug2"
}, {
  id: 3,
  status: "new",
  priority: "low",
  owner: "anna",
  title: "bug3"
}, {
  id: 4,
  status: "done",
  priority: "medium",
  owner: "george",
  title: "bug4"
}];


app.get('/api/bugs', function(req, res) {
  res.json(bugData);
});
// Create a POST handler for /api/bugs in the web server that takes in a new bug
// as JSON and adds it to the bug array. Generate the bug ID based on current array length.


app.post('/api/bugs', function(req,res,next) {
  console.log("Req body: " + req.body);
  var newBug = req.body;
  newBug.id = bugData.length + 1;
  bugData.push(newBug);
  res.json(newBug); // sends a JSON response. You can use it to convert other values to JSON.
});

var server = app.listen(3000, function() {
  // GM note - I think the server variable in the line below is the variable
  // returned by running the method with the argument 3000 - that returns an
  // httpserver instance called server. That instance is then used as part of
  // the callback function in the in the line below - it's just a coincidence
  // that the whole function was assigned to var server above as well.
	var port = server.address().port;
	console.log("Started server at port ", port);
});
