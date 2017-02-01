const fs = require("fs");
const events = require("events");

class WinChecker extends events.EventEmitter{

    constructor(){
        super();
    }

    init(){
        this.mockFile = "mockFile.json";
        if(!fs.existsSync(this.mockFile)){
            var data = JSON.stringify(new MockData());
            fs.writeFileSync(this.mockFile, data);
        }
    }

    checkCard(){
        fs.watchFile();
    }
}

class MockData{
    constructor(){
        this.card = false;
    }
}