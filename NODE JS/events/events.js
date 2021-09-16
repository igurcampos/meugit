
const {EventEmitter} = require("events")

const ev = new EventEmitter()

ev.on("saySomething", (message) => {
    console.log("eu ouvi você:", message)
})

ev.emit("saySomething", "Igor, finalmente está conseguindo!")

