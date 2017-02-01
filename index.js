const events = require("events");
const os = require("os");

class MFRC522 extends events.EventEmitter{

    constructor(){
        super();
    }

    init(){
        var that = this;
        var mod = null;
        if(os.platform() == "win32"){
             mod = require("./winChecker");
        }else if(os.platform() == "linux"){
            mod = require("./linuxChecker");
        }
        var checker = new mod();
        checker.init();

        checker.checkCard();

        checker.on("cardDetected", function(uid){
            that.emit("cardDetected", uid);
        });

        
    }
}

module.exports = MFRC522;