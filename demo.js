var checkerMod = require("./index");

var checker = new checkerMod();

checker.on("cardDetected", function(uid){
    console.log("New Card: " + uid);
})

checker.init();