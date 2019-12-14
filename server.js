// Require npm packages
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Static CSS
app.use(express.static(__dirname + "/app/css"));

// Setting up express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Link html and api routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Start the servers
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
