const fs = require("fs");
const events = require("events");

class WinChecker extends events.EventEmitter{

    constructor(){
        super();
    }

    init(){
        this.mockFile = "mockFile.json";
        if(!fs.existsSync(this.mockFile)){
            
        }
    }

    checkCard(){
        fs.watchFile();
    }
}