input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.showNumber(input.temperature())
})
basic.showIcon(IconNames.Fabulous)
basic.showString("Jarmo ")
basic.showString("Papa ")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)
basic.forever(function () {
	
})
