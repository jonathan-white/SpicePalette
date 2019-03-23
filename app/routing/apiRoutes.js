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

router.get("/api/all-spices", function(req, res) {
	res.json(spices);
});

router.get("/api/five-spices", function(req, res) {
	res.json(getFiveSpices(spices));
});

router.get("/api/five-spices-for-meat/:meat", function(req, res) {
	const chosen = req.params.meat.toLowerCase();
	const spicesForMeat = spices.filter(s => {
		for (let i = 0; i < s.meat.length; i++) {
			if(s.meat[i].toLowerCase() === chosen) return s;
		}
	});

	res.json(getFiveSpices(spicesForMeat));
});

function getFiveSpices(spiceList){
	const spiceSetCount = 5;
	let ids = [];
	let spiceRack = [];

	// Store all possible ids into an array
	for (let i = 0; i < spiceList.length; i++) {
		ids.push(spiceList[i].id);
	}

	// Select a random spice
	for (let i = 0; i < spiceSetCount; i++) {
		var randomID = Math.floor(Math.random() * ids.length);
		var selectedSpiceID = parseInt(ids.splice(randomID, 1));
		spiceRack.push(spiceList.filter(s => {
			if(s.id === selectedSpiceID) return s;
		})[0]);
	}
	return spiceRack;
}

module.exports = router;