radio.onReceivedNumber(function (receivedNumber) {
    OutdoorTemp = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    basic.showNumber(OutdoorTemp)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
let OutdoorTemp = 0
radio.setGroup(7)
basic.showIcon(IconNames.Heart)
