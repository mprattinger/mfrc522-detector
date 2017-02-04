"use strict";

var checkerMod = require("./checker");

var checker = new checkerMod();

checker.init();
console.log("Checker initialized!");
checker.checkCard();
console.log("CheckCard runnung...");

checker.on("cardDetected", function(uid){
	console.log("New Card: " + uid);
});

console.log("Checker loaded! Waiting for card...");
