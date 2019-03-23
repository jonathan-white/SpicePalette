const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const logger = require("morgan");

// Setup the Express app
// ========================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Setup Middleware
// ========================================================
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Static Public
// ========================================================
app.use(express.static('app/public'));

// Setup Handlebars
// ========================================================

app.set('views','./app/views');
app.engine('handlebars', exphbs({
	layoutsDir: "./app/views/layouts",
	defaultLayout: "main"
}));
app.set('view engine', 'handlebars');

// Routes Middleware
// ========================================================
const htmlRoutes = require('./app/routing/htmlRoutes');
app.use("/", htmlRoutes);

const apiRoutes = require('./app/routing/apiRoutes');
app.use("/", apiRoutes);

// Start Listening
// ========================================================
app.listen(PORT, function() {
	console.log(`App listening on PORT ${PORT}`);
});