input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(input.temperature())
})
basic.showIcon(IconNames.Fabulous)
basic.showString("Jarmo ")
basic.showString("Papa ")
for (let Index = 0; Index <= 11; Index++) {
    basic.showNumber(Index)
}
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
basic.forever(function () {
	
})
