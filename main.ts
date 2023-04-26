radio.onReceivedNumber(function (receivedNumber) {
    Activity = receivedNumber
})
function armUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function stop () {
    wuKong.stopAllMotor()
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function armDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
let Activity = 0
joystickbit.initJoystickBit()
radio.setGroup(19)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        radio.sendNumber(5)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    }
})
basic.forever(function () {
    if (Activity == 1) {
        forward()
    } else if (Activity == 2) {
        reverse()
    } else if (Activity == 5) {
        armUp()
    } else if (Activity == 6) {
        armDown()
    } else if (Activity == 0) {
        stop()
    }
})
