input.onButtonPressed(Button.A, function () {
    servos.P1.run(speed)
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.stop()
})
input.onButtonPressed(Button.B, function () {
    speed += 5
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    savedNumber += 1
    datalogger.log(datalogger.createCV("" + player + "_score" + savedNumber, convertToText(speed)))
    basic.showString("Speed: " + convertToText(speed))
})
let savedNumber = 0
let player = ""
let speed = 0
speed = 25
player = "testplayer01"
savedNumber = 0
basic.forever(function () {
    if (speed == 100) {
        basic.showString("Speed has reached maximum limit.")
        speed = 50
        servos.P1.stop()
    }
})
