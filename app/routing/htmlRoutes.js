// Dependencies
// ========================================================
var express = require("express");
var router = express.Router();
var path = require("path");

// Import Data
// ========================================================
const spices = require("../data/spices");

// Routes
// ========================================================

// Displays the index page
router.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Spice home
router.get("/home", function(req, res) {
	const spiceSetCount = 5;
	let ids = [];
	let spiceRack = [];

	// Store all possible ids into an array
	for (let i = 0; i < spices.length; i++) {
		ids.push(spices[i].id);
	}

	// Select a random spice
	for (let i = 0; i < spiceSetCount; i++) {
		var randomID = Math.floor(Math.random() * ids.length);
		var selectedSpiceID = parseInt(ids.splice(randomID, 1));
		spiceRack.push(spices.filter(s => {
			if(s.id === selectedSpiceID) return s;
		})[0]);
	}

	res.render("index", {
		spices: spiceRack
	});
});

module.exports = router;