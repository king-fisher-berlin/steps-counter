input.onButtonPressed(Button.A, function () {
    steps = 0
    basic.clearScreen()
    basic.showNumber(steps)
})
let steps = 0
steps = 0
basic.showLeds(`
    . . # . #
    # # # # #
    # . # . .
    . # . # .
    . # . # .
    `)
input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        steps += 1
        basic.showNumber(steps)
    }
})
