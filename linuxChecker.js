const events = require("events");
const reader = require("mfrc522-rpi");
const q = require("q");

class LinuxChecker extends events.EventEmitter {

    constructor() {
        super();
    }

    init() {
        this.continueChecking = false;
    }

    checkCard() {
        var that = this;
        this.continueChecking = true;

        q.fcall(function () {
            while (that.continueChecking) {
                var resp = reader.findCard();
                if (!resp.satus) continue;

                resp = null;
                resp = reader.guidUid();
                if (!resp.status) continue;

                var uid = resp.data;
                var uidStr = uid[0].toString(16) + "-" + uid[1].toString(16) + "-" + uid[2].toString(16) + "-" + uid[3].toString(16);
                that.emit("cardDetected", uidStr);
            }
        });
    }

    stopReading() {
        this.continueChecking = false;
    }
}

module.exports = LinuxChecker;