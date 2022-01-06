maqueen.IR_callbackUser(function (message) {
    if (message == 12) {
        maqueen.motorStopAll()
        vitesse = 89
    }
    if (message == 24) {
        maqueen.motorStopAll()
        vitesse = 120
    }
    if (message == 94) {
        maqueen.motorStopAll()
        vitesse = 255
    }
    if (message == 64) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, vitesse)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, vitesse)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 25) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, vitesse)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, vitesse)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 7) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, vitesse)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 9) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, vitesse)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    }
    if (message == 21) {
        maqueen.motorStopAll()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    if (message == 66) {
        Couleur = neopixel.colors(NeoPixelColors.Violet)
        strip.showColor(Couleur)
    }
    if (message == 82) {
        Couleur = neopixel.colors(NeoPixelColors.Green)
        strip.showColor(Couleur)
    }
    if (message == 74) {
        Couleur = neopixel.colors(NeoPixelColors.Red)
        strip.showColor(Couleur)
    }
    if (message == 69) {
        strip.setBrightness(40)
        strip.showColor(Couleur)
    }
    if (message == 71) {
        strip.showColor(Couleur)
        strip.setBrightness(255)
    }
    if (message == 70) {
        sirène = true
    }
    if (message == 13) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, vitesse)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, vitesse)
        basic.pause(600)
        maqueen.motorStopAll()
    }
})
let sirène = false
let vitesse = 0
let Couleur = 0
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Heart)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
Couleur = neopixel.colors(NeoPixelColors.Violet)
strip.showColor(Couleur)
vitesse = 100
let cpt = 1
sirène = false
basic.forever(function () {
    if (sirène) {
        music.playMelody("C5 G C5 G C5 G C5 G ", 120)
        sirène = false
    }
    if (maqueen.sensor(PingUnit.Centimeters) < 20 && maqueen.sensor(PingUnit.Centimeters) != 0) {
        cpt += 1
        if (cpt == 5) {
            maqueen.motorStopAll()
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(1000)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(1000)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(1000)
            cpt = 1
        }
    } else {
        cpt = 1
    }
})
