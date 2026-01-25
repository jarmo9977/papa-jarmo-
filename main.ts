input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(input.temperature())
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(input.compassHeading())
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(input.lightLevel())
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showIcon(IconNames.Fabulous)
basic.showString("Jarmo ")
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.setLedColors(0x7f00ff, 0x00ffff, 0x000000)
})
