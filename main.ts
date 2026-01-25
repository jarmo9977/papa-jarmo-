input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(input.temperature())
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
basic.showString("Papa ")
for (let Index = 0; Index <= 11; Index++) {
    basic.showNumber(Index)
}
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
