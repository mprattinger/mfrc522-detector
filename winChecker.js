const chokidar = require('chokidar');
const events = require("events");
const path = require("path");
const fs = require("fs");

class WinChecker extends events.EventEmitter {

    constructor() {
        super();
    }

    init() {
        this.mockFile = path.join(__dirname, "mockFile.json");
        // this.mockFile = "mockFile.json";
        if (!fs.existsSync(this.mockFile)) {
            var data = {};
            data.card = false;
            data.cardUid = "";
            var dataString = JSON.stringify(data);
            fs.writeFileSync(this.mockFile, dataString);
        }
    }

    checkCard() {
        var that = this;

        this.watcher = chokidar.watch(this.mockFile);
        this.watcher.on("change", function (path) {
            fs.readFile(that.mockFile, function (err, data) {
                let d = JSON.parse(data);
                if (d && d.card == true) {
                    that.emit("cardDetected", d.cardUid);
                }
            });
        });
    }
}

module.exports = WinChecker;