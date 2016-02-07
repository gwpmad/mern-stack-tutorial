//this file is exactly the same as other basic
// servers you've made except that the app.listen has a callback.
var express = require('express');

var app = express();

app.use(express.static('static'));

var server = app.listen(3000, function() {
  // GM note - I think the server variable in the line below is the variable
  // returned by running the method with the argument 3000 - that returns an
  // httpserver instance called server. That instance is then used as part of
  // the callback function in the in the line below - it's just a coincidence
  // that the whole function was assigned to var server above as well.
	var port = server.address().port;
	console.log("Started server at port", port);
});
