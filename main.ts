input.onButtonPressed(Button.A, function () {
    basic.showString("“Exceso de ruido hoy:")
    basic.showNumber(ruido)
    basic.showString("veces")
})
input.onSound(DetectedSound.Loud, function () {
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    ruido = 1
})
let ruido = 0
ruido = 0
basic.showString("Iniciando sistema de control de sonido y temperatura")
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    while (input.temperature() == 27) {
        for (let index = 0; index < 5; index++) {
            basic.showLeds(`
                . . # # #
                # . # . .
                . . # . .
                . . # . .
                . . # # #
                `)
            basic.pause(100)
            basic.showArrow(ArrowNames.South)
        }
    }
    basic.clearScreen()
    pins.analogWritePin(AnalogPin.P10, 27)
    basic.pause(100)
})
