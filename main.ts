input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # . . .
        . # . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Tortoise)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        . . # . .
        . # # # .
        . . # . .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        . . . # #
        . . . # .
        `)
})
basic.forever(function () {
	
})
