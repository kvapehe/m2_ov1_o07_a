/**
 * Når en rister på Microbit eller endrer posisjon så vil accelerometeret registrere dette og vise ulike tilstander.
 * 
 * Ved å teste på input fra disse kan en vise ulike bilder.
 */
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
