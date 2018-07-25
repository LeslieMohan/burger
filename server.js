var express = require("express");
var bodyParser = require("body-parser");


var PORT = process.env.PORT || 3000;

var app = express();

//serve static content
app.use(express.static("public"));

//parse application
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());

//set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes and have access to them
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
//start server and have it listen to client request
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
