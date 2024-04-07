function VERT () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 1023)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "vert") {
        VERT()
    }
    basic.pause(2000)
    radio.sendString("GO")
    basic.pause(5000)
    ORANGE()
    basic.pause(2000)
    ROUGE()
})
function ROUGE () {
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function ORANGE () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 0)
}
radio.setGroup(1)
ROUGE()
