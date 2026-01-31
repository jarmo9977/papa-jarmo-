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
basic.showString("PAPA")
basic.showString("Jarmo ")
basic.showString("🎱♟♣️🎮🀄🃏")
for (let Index = 0; Index <= 11; Index++) {
    basic.showNumber(Index)
}
basic.showString("Ich zelle bis 3 . Dann machs BAAAAAANG . KAPIERT !!!!!! ")
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.setLedColors(0x7f00ff, 0x00ffff, 0x00ff00)
})
