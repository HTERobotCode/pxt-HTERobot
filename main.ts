//% groups='["引脚", "模块", "IIC", "OLED", "舵机", "电机",  "pixy2", "other" ]'
//% color="#50A820" weight=10 icon="\uf0c2"
namespace HTERobot {

    const PCA9685_ADDRESS = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09
    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD

    const STP_CHA_L = 2047
    const STP_CHA_H = 4095

    const STP_CHB_L = 1
    const STP_CHB_H = 2047

    const STP_CHC_L = 1023
    const STP_CHC_H = 3071

    const STP_CHD_L = 3071
    const STP_CHD_H = 1023

    const DISPLAY_OFF = 0xAE;
    const DISPLAY_ON = 0xAF;
    const basicFont: string[] = [
        "\x00\x00\x00\x00\x00\x00\x00\x00", // " "
        "\x00\x00\x5F\x00\x00\x00\x00\x00", // "!"
        "\x00\x00\x07\x00\x07\x00\x00\x00", // """
        "\x00\x14\x7F\x14\x7F\x14\x00\x00", // "#"
        "\x00\x24\x2A\x7F\x2A\x12\x00\x00", // "$"
        "\x00\x23\x13\x08\x64\x62\x00\x00", // "%"
        "\x00\x36\x49\x55\x22\x50\x00\x00", // "&"
        "\x00\x00\x05\x03\x00\x00\x00\x00", // "'"
        "\x00\x1C\x22\x41\x00\x00\x00\x00", // "("
        "\x00\x41\x22\x1C\x00\x00\x00\x00", // ")"
        "\x00\x08\x2A\x1C\x2A\x08\x00\x00", // "*"
        "\x00\x08\x08\x3E\x08\x08\x00\x00", // "+"
        "\x00\xA0\x60\x00\x00\x00\x00\x00", // ","
        "\x00\x08\x08\x08\x08\x08\x00\x00", // "-"
        "\x00\x60\x60\x00\x00\x00\x00\x00", // "."
        "\x00\x20\x10\x08\x04\x02\x00\x00", // "/"
        "\x00\x3E\x51\x49\x45\x3E\x00\x00", // "0"
        "\x00\x00\x42\x7F\x40\x00\x00\x00", // "1"
        "\x00\x62\x51\x49\x49\x46\x00\x00", // "2"
        "\x00\x22\x41\x49\x49\x36\x00\x00", // "3"
        "\x00\x18\x14\x12\x7F\x10\x00\x00", // "4"
        "\x00\x27\x45\x45\x45\x39\x00\x00", // "5"
        "\x00\x3C\x4A\x49\x49\x30\x00\x00", // "6"
        "\x00\x01\x71\x09\x05\x03\x00\x00", // "7"
        "\x00\x36\x49\x49\x49\x36\x00\x00", // "8"
        "\x00\x06\x49\x49\x29\x1E\x00\x00", // "9"
        "\x00\x00\x36\x36\x00\x00\x00\x00", // ":"
        "\x00\x00\xAC\x6C\x00\x00\x00\x00", // ";"
        "\x00\x08\x14\x22\x41\x00\x00\x00", // "<"
        "\x00\x14\x14\x14\x14\x14\x00\x00", // "="
        "\x00\x41\x22\x14\x08\x00\x00\x00", // ">"
        "\x00\x02\x01\x51\x09\x06\x00\x00", // "?"
        "\x00\x32\x49\x79\x41\x3E\x00\x00", // "@"
        "\x00\x7E\x09\x09\x09\x7E\x00\x00", // "A"
        "\x00\x7F\x49\x49\x49\x36\x00\x00", // "B"
        "\x00\x3E\x41\x41\x41\x22\x00\x00", // "C"
        "\x00\x7F\x41\x41\x22\x1C\x00\x00", // "D"
        "\x00\x7F\x49\x49\x49\x41\x00\x00", // "E"
        "\x00\x7F\x09\x09\x09\x01\x00\x00", // "F"
        "\x00\x3E\x41\x41\x51\x72\x00\x00", // "G"
        "\x00\x7F\x08\x08\x08\x7F\x00\x00", // "H"
        "\x00\x41\x7F\x41\x00\x00\x00\x00", // "I"
        "\x00\x20\x40\x41\x3F\x01\x00\x00", // "J"
        "\x00\x7F\x08\x14\x22\x41\x00\x00", // "K"
        "\x00\x7F\x40\x40\x40\x40\x00\x00", // "L"
        "\x00\x7F\x02\x0C\x02\x7F\x00\x00", // "M"
        "\x00\x7F\x04\x08\x10\x7F\x00\x00", // "N"
        "\x00\x3E\x41\x41\x41\x3E\x00\x00", // "O"
        "\x00\x7F\x09\x09\x09\x06\x00\x00", // "P"
        "\x00\x3E\x41\x51\x21\x5E\x00\x00", // "Q"
        "\x00\x7F\x09\x19\x29\x46\x00\x00", // "R"
        "\x00\x26\x49\x49\x49\x32\x00\x00", // "S"
        "\x00\x01\x01\x7F\x01\x01\x00\x00", // "T"
        "\x00\x3F\x40\x40\x40\x3F\x00\x00", // "U"
        "\x00\x1F\x20\x40\x20\x1F\x00\x00", // "V"
        "\x00\x3F\x40\x38\x40\x3F\x00\x00", // "W"
        "\x00\x63\x14\x08\x14\x63\x00\x00", // "X"
        "\x00\x03\x04\x78\x04\x03\x00\x00", // "Y"
        "\x00\x61\x51\x49\x45\x43\x00\x00", // "Z"
        "\x00\x7F\x41\x41\x00\x00\x00\x00", // """
        "\x00\x02\x04\x08\x10\x20\x00\x00", // "\"
        "\x00\x41\x41\x7F\x00\x00\x00\x00", // """
        "\x00\x04\x02\x01\x02\x04\x00\x00", // "^"
        "\x00\x80\x80\x80\x80\x80\x00\x00", // "_"
        "\x00\x01\x02\x04\x00\x00\x00\x00", // "`"
        "\x00\x20\x54\x54\x54\x78\x00\x00", // "a"
        "\x00\x7F\x48\x44\x44\x38\x00\x00", // "b"
        "\x00\x38\x44\x44\x28\x00\x00\x00", // "c"
        "\x00\x38\x44\x44\x48\x7F\x00\x00", // "d"
        "\x00\x38\x54\x54\x54\x18\x00\x00", // "e"
        "\x00\x08\x7E\x09\x02\x00\x00\x00", // "f"
        "\x00\x18\xA4\xA4\xA4\x7C\x00\x00", // "g"
        "\x00\x7F\x08\x04\x04\x78\x00\x00", // "h"
        "\x00\x00\x7D\x00\x00\x00\x00\x00", // "i"
        "\x00\x80\x84\x7D\x00\x00\x00\x00", // "j"
        "\x00\x7F\x10\x28\x44\x00\x00\x00", // "k"
        "\x00\x41\x7F\x40\x00\x00\x00\x00", // "l"
        "\x00\x7C\x04\x18\x04\x78\x00\x00", // "m"
        "\x00\x7C\x08\x04\x7C\x00\x00\x00", // "n"
        "\x00\x38\x44\x44\x38\x00\x00\x00", // "o"
        "\x00\xFC\x24\x24\x18\x00\x00\x00", // "p"
        "\x00\x18\x24\x24\xFC\x00\x00\x00", // "q"
        "\x00\x00\x7C\x08\x04\x00\x00\x00", // "r"
        "\x00\x48\x54\x54\x24\x00\x00\x00", // "s"
        "\x00\x04\x7F\x44\x00\x00\x00\x00", // "t"
        "\x00\x3C\x40\x40\x7C\x00\x00\x00", // "u"
        "\x00\x1C\x20\x40\x20\x1C\x00\x00", // "v"
        "\x00\x3C\x40\x30\x40\x3C\x00\x00", // "w"
        "\x00\x44\x28\x10\x28\x44\x00\x00", // "x"
        "\x00\x1C\xA0\xA0\x7C\x00\x00\x00", // "y"
        "\x00\x44\x64\x54\x4C\x44\x00\x00", // "z"
        "\x00\x08\x36\x41\x00\x00\x00\x00", // "{"
        "\x00\x00\x7F\x00\x00\x00\x00\x00", // "|"
        "\x00\x41\x36\x08\x00\x00\x00\x00", // "}"
        "\x00\x02\x01\x01\x02\x01\x00\x00"  // "~"
    ];

    /**
    * TCS34725: Color recognition sensor related register variable definition
    */
    let TCS34725_ADDRESS = 0x29;
    let REG_TCS34725_ID = 0x12;
    let REG_TCS34725_COMMAND_BIT = 0x80;
    let REG_TCS34725_ENABLE = 0X00;
    let REG_TCS34725_ATIME = 0X01
    let REG_TCS34725_GAIN = 0x0F
    let REG_CLEAR_CHANNEL_L = 0X14;
    let REG_RED_CHANNEL_L = 0X16;
    let REG_GREEN_CHANNEL_L = 0X18;
    let REG_BLUE_CHANNEL_L = 0X1A;

    let TCS34275_POWER_ON = 0X01
    let TCS34725_ENABLE_AEN = 0X02
    let TCS34725_RGBC_C = 0;
    let TCS34725_RGBC_R = 0;
    let TCS34725_RGBC_G = 0;
    let TCS34725_RGBC_B = 0;
    let TCS34725_BEGIN = 0;
    let TCS34725_ENABLE_AIEN = 0X10;

    export enum ExpandDigitalPins {
        D0 = 0,
        D1 = 1,
        D2 = 2,
        D3 = 3,
        D4 = 4,
        A0 = 5,
        A1 = 6,
        A2 = 7
    }

    export enum ExpandAnalogPins {
        A0 = 0,
        A1 = 1,
        A2 = 2
    }

    export enum Servos {
        S1 = 0x01,
        S2 = 0x02,
        S3 = 0x03,
        S4 = 0x04,
        S5 = 0x05,
        S6 = 0x06,
        S7 = 0x07,
        S8 = 0x08
    }

    export enum Motors {
        MA = 0x1,
        MB = 0x2
    }

    export enum DHT11Type {
        //% block="摄氏温度(℃)" enumval=0
        DHT11_temperature_C,
        //% block="华氏温度(℉)" enumval=1
        DHT11_temperature_F,
        //% block="湿度(0~100)" enumval=2
        DHT11_humidity,
    }

    export enum Distance_Unit {
        //% block="毫米" enumval=0
        Distance_Unit_mm,
        //% block="厘米" enumval=1
        Distance_Unit_cm,
        //% block="英寸" enumval=2
        Distance_Unit_inch,
    }

    /**
     * Different modes for RGB or RGB+W NeoPixel strips
     */
    export enum NeoPixelMode {
        //% block="RGB (GRB format)"
        RGB = 1,
        //% block="RGB+W"
        RGBW = 2,
        //% block="RGB (RGB format)"
        RGB_RGB = 3
    }

    export enum LightState {
        //% block="左灯" 
        Left = 0,
        //% block="右灯" 
        Right = 1,
        //% block="左右灯" 
        All = 2,
    }

    export enum ColorState {
        //% block="红色值" 
        Red = 0,
        //% block="绿色值" 
        Green = 1,
        //% block="蓝色值" 
        Blue = 2,
    }

    let initialized = false

    function getInt8LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int8LE);
    }

    function getUInt16LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16LE);
    }

    function getInt16LE(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int16LE);
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initPCA9685(): void {
        i2cwrite(PCA9685_ADDRESS, MODE1, 0x00)
        setFreq(50);
        for (let idx = 0; idx < 16; idx++) {
            setPwm(idx, 0, 0);
        }
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADDRESS, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADDRESS, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADDRESS, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;

        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    }

    function stopMotor(index: number) {
        setPwm((index - 1) * 2, 0, 0);
        setPwm((index - 1) * 2 + 1, 0, 0);
    }

    function ReadExpandDigitalPin(index: number): any {
        let pin = DigitalPin.P8;
        switch (index) {
            case 0:
                pin = DigitalPin.P8
                break;
            case 1:
                pin = DigitalPin.P13
                break;
            case 2:
                pin = DigitalPin.P14
                break;
            case 3:
                pin = DigitalPin.P15
                break;
            case 4:
                pin = DigitalPin.P16
                break;
            case 5:
                pin = DigitalPin.P0
                break;
            case 6:
                pin = DigitalPin.P1
                break;
            case 7:
                pin = DigitalPin.P2
                break;
        }
        return pin
    }

    function ReadExpandAnalogPin(index: number): any {
        let pin = AnalogPin.P0;
        switch (index) {
            case 0:
                pin = AnalogPin.P0
                break;
            case 1:
                pin = AnalogPin.P1
                break;
            case 2:
                pin = AnalogPin.P2
                break;
        }
        return pin
    }

    /**
     * 拓展数字引脚读入函数
     * @param index eg: D0-D4
     */
    //% blockId=ExpandDigitalPinInPut block="数字读取扩展引脚|%index"
    //% weight=60
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% group=引脚
    export function ExpandDigitalPinInPut(index: ExpandDigitalPins): number {
        let pin = ReadExpandDigitalPin(index);
        return pins.digitalReadPin(pin);
    }

    /**
     * 拓展数字引脚输出函数
     * @param index index eg: D0-D4
     * @param Value value is 0 or 1
     */
    //% blockId=ExpandDigitalPinOutPut block="向扩展引脚|%index|数字写入|%Value"
    //% weight=59
    //% Value.min=0 Value.max=1
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% group=引脚
    export function ExpandDigitalPinOutPut(index: ExpandDigitalPins, Value: number): void {
        let pin = ReadExpandDigitalPin(index);
        pins.digitalWritePin(pin, Value);
    }

    /**
     * 拓展模拟引脚读入函数
     * @param index eg:A0,A1,A2
     */
    //% blockId=ExpandAnalogPinInPut block="模拟读取扩展引脚|%index"
    //% weight=58
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% group=引脚
    export function ExpandAnalogPinInPut(index: ExpandAnalogPins): number {
        let pin = ReadExpandAnalogPin(index);
        return pins.analogReadPin(pin);
    }

    /**
     * 拓展模拟引脚输出函数
     * @param index  eg:A0,A1,A2
     * @param Value   value is 0-1024
     */
    //% blockId=ExpandAnalogPinOutPut block="向扩展引脚|%index|模拟写入|%Value"
    //% weight=57
    //% Value.min=0 Value.max=1023
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% group=引脚
    export function ExpandAnalogPinOutPut(index: ExpandDigitalPins, Value: number): void {
        let pin = ReadExpandAnalogPin(index);
        pins.analogWritePin(pin, Value);
    }

    /**
	 * 舵机打角0-180度
	 * @param index Servo Channel; eg: S1
	 * @param Degree [0-180] Degree of servo; eg: 0, 90, 180
	*/
    //% blockId=HTERobot_servo block="舵机|%index|转到|%Degree|角度"
    //% weight=49
    //% Degree.min=0 Degree.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    //% group=舵机
    export function Servo(index: Servos, Degree: number): void {
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let v_us = (Degree * 1800 / 180 + 600) // 0.6 ~ 2.4
        let value = v_us * 4096 / 20000
        setPwm(index + 7, 0, value)
    }
    /**
	 * 舵机打角0.0-180.0度
	 * @param index Servo Channel; eg: S1
	 * @param Degree [0.0-180.0] Degree of servo; eg: 0, 900, 1800
	*/
    //% blockId=HTERobot_servoAccurate block="舵机|%index|精确转到|%DegreeAcurrate|角度"
    //% weight=48
    //% DegreeAcurrate.min=0 DegreeAcurrate.max=1800
    //% group=舵机
    export function ServoAccurate(index: Servos, DegreeAcurrate: number): void {
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let v_us = (DegreeAcurrate + 600) // 0.6 ~ 2.4
        let value = v_us * 4096 / 20000
        setPwm(index + 7, 0, value)
    }

    /**
     * 电机运行速度-255~255
     */
    //% blockId=HTERobot_motor_run block="电机|%index|速度|%speed"
    //% weight=39
    //% speed.min=-255 speed.max=255
    //% group=电机
    export function MotorRun(index: Motors, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }
        if (index > 2 || index <= 0)
            return
        let pp = (index - 1) * 2
        let pn = (index - 1) * 2 + 1
        if (speed >= 0) {
            if (index == 1) {
                setPwm(pp, 0, 0)
                setPwm(pn, 0, speed)
            } else {
                setPwm(pp, 0, speed)
                setPwm(pn, 0, 0)
            }
        } else {
            if (index == 1) {
                setPwm(pp, 0, -speed)
                setPwm(pn, 0, 0)
            } else if (index == 2) {
                setPwm(pp, 0, 0)
                setPwm(pn, 0, -speed)
            }

        }
    }

    /**
     * 电机以给定速度转动给定延时时间
     * 
     */
    //% blockId=HTERobot_motor_rundelay block="电机|%index|速度|%speed|延时|%delay|秒"
    //% weight=38
    //% speed.min=-255 speed.max=255
    //% group=电机
    export function MotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay * 1000);
        MotorRun(index, 0);
    }

    /**
     * 电机停止
     */
    //% blockId=HTERobot_stop block="电机|%index|停止"
    //% weight=37
    //% group=电机
    export function MotorStop(index: Motors): void {
        MotorRun(index, 0);
    }

    /**
     * HTERobot_i2cwriteReg
     */
    //% blockId=HTERobot_i2cwriteReg block="向设备地址|%addr|寄存器|%reg|写入值|%value"
    //% weight=8
    //% group=IIC
    export function i2cwriteReg(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    /**
     * HTERobot_i2creadReg
     */
    //% blockId=HTERobot_i2creadReg block="从设备地址|%addr|读取寄存器|%reg|值"
    //% weight=9
    //% group=IIC
    export function i2creadReg(addr: number, reg: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    // 颜色传感器 TCS34725 初始化
    function tcs34725_begin(): boolean {
        TCS34725_BEGIN = 0;
        let id = i2creadReg(TCS34725_ADDRESS, REG_TCS34725_ID | REG_TCS34725_COMMAND_BIT);
        if ((id != 0x44) && (id != 0x10)) return false;
        TCS34725_BEGIN = 1;
        i2cwriteReg(TCS34725_ADDRESS, REG_TCS34725_ATIME | REG_TCS34725_COMMAND_BIT, 0xEB);
        i2cwriteReg(TCS34725_ADDRESS, REG_TCS34725_GAIN | REG_TCS34725_COMMAND_BIT, 0x01);
        i2cwriteReg(TCS34725_ADDRESS, REG_TCS34725_ENABLE | REG_TCS34725_COMMAND_BIT, 0x01);
        basic.pause(3);
        i2cwriteReg(TCS34725_ADDRESS, REG_TCS34725_ENABLE | REG_TCS34725_COMMAND_BIT, 0x01 | 0x02);
        return true;
    }

    function getRGBC() {
        if (!TCS34725_BEGIN) tcs34725_begin();

        TCS34725_RGBC_C = getUInt16LE(TCS34725_ADDRESS, REG_CLEAR_CHANNEL_L | REG_TCS34725_COMMAND_BIT);
        TCS34725_RGBC_R = getUInt16LE(TCS34725_ADDRESS, REG_RED_CHANNEL_L | REG_TCS34725_COMMAND_BIT);
        TCS34725_RGBC_G = getUInt16LE(TCS34725_ADDRESS, REG_GREEN_CHANNEL_L | REG_TCS34725_COMMAND_BIT);
        TCS34725_RGBC_B = getUInt16LE(TCS34725_ADDRESS, REG_BLUE_CHANNEL_L | REG_TCS34725_COMMAND_BIT);

        basic.pause(50);
        let ret = i2creadReg(TCS34725_ADDRESS, REG_TCS34725_ENABLE | REG_TCS34725_COMMAND_BIT)
        ret |= TCS34725_ENABLE_AIEN;
        i2cwriteReg(TCS34725_ADDRESS, REG_TCS34725_ENABLE | REG_TCS34725_COMMAND_BIT, ret)
    }

    /**
     * 颜色传感器 TCS34725 获取颜色值
     */
    //% blockId=GetColor block="颜色传感器获取 %state"
    //% weight=10
    //% group=IIC
    export function GetColor(state: ColorState): number {
        getRGBC();
        let red = (Math.round(TCS34725_RGBC_R) / Math.round(TCS34725_RGBC_C)) * 255;
        let green = (Math.round(TCS34725_RGBC_G) / Math.round(TCS34725_RGBC_C)) * 255;
        let blue = (Math.round(TCS34725_RGBC_B) / Math.round(TCS34725_RGBC_C)) * 255;
        let value = 0
        switch (state) {
            case 0:
                value = Math.round(red)
                break
            case 1:
                value =  Math.round(green)
                break
            case 2:
                value =  Math.round(blue)
                break
        }
        return value    
    }

    /**
     * OLED 12864 初始化
     */
    //% blockId=InitDisplay block="OLED 初始化"
    //% group=OLED
    //% weight=100

    export function InitDisplay(): void {
        cmd(0xAE);  // Set display OFF
        cmd(0xD5);  // Set Display Clock Divide Ratio / OSC Frequency 0xD4
        cmd(0x80);  // Display Clock Divide Ratio / OSC Frequency 
        cmd(0xA8);  // Set Multiplex Ratio
        cmd(0x3F);  // Multiplex Ratio for 128x64 (64-1)
        cmd(0xD3);  // Set Display Offset
        cmd(0x00);  // Display Offset
        cmd(0x40);  // Set Display Start Line
        cmd(0x8D);  // Set Charge Pump
        cmd(0x14);  // Charge Pump (0x10 External, 0x14 Internal DC/DC)
        cmd(0xA1);  // Set Segment Re-Map
        cmd(0xC8);  // Set Com Output Scan Direction
        cmd(0xDA);  // Set COM Hardware Configuration
        cmd(0x12);  // COM Hardware Configuration
        cmd(0x81);  // Set Contrast
        cmd(0xCF);  // Contrast
        cmd(0xD9);  // Set Pre-Charge Period
        cmd(0xF1);  // Set Pre-Charge Period (0x22 External, 0xF1 Internal)
        cmd(0xDB);  // Set VCOMH Deselect Level
        cmd(0x40);  // VCOMH Deselect Level
        cmd(0xA4);  // Set all pixels OFF
        cmd(0xA6);  // Set display not inverted
        cmd(0xAF);  // Set display On
        clear();
    }
    /**
     * OLED 12864 清除显示
     */
    //% blockId=OLED_Clear block="OLED 清除显示"
    //% weight=85
    //% group=OLED
    export function clear() {
        //cmd(DISPLAY_OFF);   //display off
        for (let j = 0; j < 8; j++) {
            setText(j, 0);
            {
                for (let i = 0; i < 16; i++)  //clear all columns
                {
                    putChar(' ');
                }
            }
        }
        //cmd(DISPLAY_ON);    //display on
        setText(0, 0);
    }
    
    function setText(row: number, column: number) {
        let r = row;
        let c = column;
        if (row < 0) { r = 0 }
        if (column < 0) { c = 0 }
        if (row > 7) { r = 7 }
        if (column > 15) { c = 15 }

        cmd(0xB0 + r);            //set page address
        cmd(0x00 + (8 * c & 0x0F));  //set column lower address
        cmd(0x10 + ((8 * c >> 4) & 0x0F));   //set column higher address
    }

    function putChar(c: string) {
        let c1 = c.charCodeAt(0);
        writeCustomChar(basicFont[c1 - 32]);
    }

    /**
     * OLED 12864 显示字符串
     * @param line line num (8 pixels per line), eg: 0
     * @param text value , eg: "hello"
     */
    //% blockId=showUserText
    //% block="OLED 在 %line 行显示文本 %text"
    //% line.min=0 line.max=7 
    //% weight=90
    //% group=OLED 
    
    export function showUserText(line:number, text:string) {
        setText(line, 0);
        for (let c of text) {
            putChar(c);
        }

        for (let i = text.length; i < 16; i++) {
            setText(line, i);
            // putChar(" ");
        }
    }
	/**
     * OLED 12864 显示数字
     * @param line line num (8 pixels per line), eg: 0
     * @param n value , eg: 0
     */
    //% blockId=OLED_number
    //% block="OLED 在 %line 行显示数字 %n"
    //% line.min=0 line.max=7 
    //% weight=90
    //% group=OLED 
    export function showUserNumber(line: number, n: number) {
        HTERobot.showUserText(line, "" + n)
    }

    function writeCustomChar(c:string) {
        for (let i = 0; i < 8; i++) {
            writeData(c.charCodeAt(i));
        }
    }

    function cmd(c: number) {
        pins.i2cWriteNumber(0x3c, c, NumberFormat.UInt16BE);
    }

    function writeData(n: number) {
        let b = n;
        if (n < 0) { n = 0 }
        if (n > 255) { n = 255 }

        pins.i2cWriteNumber(0x3c, 0x4000 + b, NumberFormat.UInt16BE);
    }
    
    /**
     * 物体中心YY
     * @param value describe value here, eg: 5
     */
    //% blockId=HTERobot_GetCenterYY block="Get CenterYY|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetCenterYY(): number {
        let a: number[] = []
        let V = 0
        let x = pins.createBuffer(5)
        x.setNumber(NumberFormat.Int8LE, 0, 0xae)
        x.setNumber(NumberFormat.Int8LE, 1, 0xc1)
        x.setNumber(NumberFormat.Int8LE, 2, 0x20)
        x.setNumber(NumberFormat.Int8LE, 3, 0x02)
        x.setNumber(NumberFormat.Int8LE, 4, 0x01)
        pins.i2cWriteBuffer(34, x)
        let y = pins.i2cReadBuffer(34, 13)
        for (let index = 0; index <= y.length - 1; index++) {
            a[index] = y.getNumber(NumberFormat.UInt8LE, index)

        }
      
        if (a[1] == 193 && a[0] == 175) {
            if (a[3] == 14) {
                return a[10]
            }
            return -1
        }
        return -2 
    }

    /**
     * 物体中心XX
     * @param value describe value here, eg: 5
     */
    //% blockId=HTERobot_GetCenterXX block="Get CenterXX|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetCenterXX(): number {
        let a: number[] = []
        let V = 0
        let x = pins.createBuffer(5)
        x.setNumber(NumberFormat.Int8LE, 0, 0xae)
        x.setNumber(NumberFormat.Int8LE, 1, 0xc1)
        x.setNumber(NumberFormat.Int8LE, 2, 0x20)
        x.setNumber(NumberFormat.Int8LE, 3, 0x02)
        x.setNumber(NumberFormat.Int8LE, 4, 0x01)
        pins.i2cWriteBuffer(34, x)
        let y = pins.i2cReadBuffer(34, 13)
        for (let index = 0; index <= y.length - 1; index++) {
            a[index] = y.getNumber(NumberFormat.UInt8LE, index)

        }
        if (a[1] == 193 && a[0] == 175 ) {
            if (a[3] == 14){
                return a[8]
            }
            return -1
        }

        return -2
    }

    /**
    * 块的大小
    * @param value describe value here, eg: 5
    */
    //% blockId=HTERobot_GetCenterSS block="Get CenterSS|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetCenterSS(): number {
        let a: number[] = []
        let V = 0
        let x = pins.createBuffer(5)
        x.setNumber(NumberFormat.Int8LE, 0, 0xae)
        x.setNumber(NumberFormat.Int8LE, 1, 0xc1)
        x.setNumber(NumberFormat.Int8LE, 2, 0x20)
        x.setNumber(NumberFormat.Int8LE, 3, 0x02)
        x.setNumber(NumberFormat.Int8LE, 4, 0x01)
        pins.i2cWriteBuffer(34, x)
        let y = pins.i2cReadBuffer(34, 13)
        for (let index = 0; index <= y.length - 1; index++) {
            a[index] = y.getNumber(NumberFormat.UInt8LE, index)
        }
        if (a[1] == 193 && a[0] == 175) {
            if (a[3] == 14) {
                return a[12]
            }
            return -1
        }

        return -2
    }

    /**
     * 物体中心X
     * @param value describe value here, eg: 5
     */
    //% blockId=HTERobot_GetCenterX block="Get CenterX|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetCenterX(): number {
        if (getA(3) == 14) {
            return getA(8)
        }
        return -1
    }


    /**
     * 摄像头检测到的画面中，最大的被测物体的尺寸（单位：像素）
     */

    //% blockId=HTERobot_GetCenterS block="被测物体尺寸(0~208像素)"
    //% group=pixy2
    export function GetCenterS(): number {
        if (getA(3) == 14) {
            return getA(12)
        }
        return -1
    }


    /**
     * 摄像头检测到的画面中，最大的被测物体块的中心值Y（单位：像素）
     * @param value 物体中心Y值, eg: 5
     */
    //% blockId=HTERobot_GetCenterY block="Get CenterY|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetCenterY(): number {
        if (getA(3) == 14) {
            return getA(10)
        }
        return -1
    }
    export enum ObjectS {
        X = 0,
        Y = 1
    }


    export enum ScreenS {
        X = 0,
        Y = 1
    }

    /**
    * 摄像头检测到的画面中,最大的被测物体的中心点的X/Y坐标值（单位：像素）
    * @param value 物体中心XY值, eg: 5
    */
    //% blockId=HTERobot_GetObjectCenter block=被测物体中心 %index|(max x:315像素 max y:207像素)"
    //% group=pixy2
    export function GetObjectCenter(index: ObjectS): number {
        const arr = [GetCenterX, GetCenterY]
        return arr[index]()
    }

    /**
    * pixy摄像头的屏幕中心点的X/Y坐标值（单位：像素）
    * @param value 屏幕中心值, eg: 5
    */
    //% blockId=HTERobot_GetScreenCenter block="屏幕中心 %index (像素)"
    //% group=pixy2
    export function GetScreenCenter(index: ScreenS): number {
        const arr = [GetScreenX, GetScreenY]
        return arr[index]()
    }

    /**
    * 屏幕中心X
    * @param value 屏幕中心X值, eg: 5
    */
    //% blockId=HTERobot_GetScreenX block="Get Screen X|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetScreenX(): number {
        return 158
    }

    /**
    * 屏幕中心Y
    * @param value 屏幕中心Y值, eg: 5
    */
    //% blockId=HTERobot_GetScreenY block="Get Screen Y|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function GetScreenY(): number {
        return 104
    }
    
    class staxida {
        public A: number[];
        getA() {
            return this.A
        }
        setA(num: number[]){
            this.A = num
        }
    }

    function pinsArr(): number[] {
        let a: number[] = []
        let x = pins.createBuffer(5)
        x.setNumber(NumberFormat.Int8LE, 0, 0xae)
        x.setNumber(NumberFormat.Int8LE, 1, 0xc1)
        x.setNumber(NumberFormat.Int8LE, 2, 0x20)
        x.setNumber(NumberFormat.Int8LE, 3, 0x02)
        x.setNumber(NumberFormat.Int8LE, 4, 0x01)
        pins.i2cWriteBuffer(34, x)
        let y = pins.i2cReadBuffer(34, 13)
        for (let index = 0; index <= y.length - 1; index++) {
            a[index] = y.getNumber(NumberFormat.UInt8LE, index)
        }
        return a;
    }
    const stax = new staxida();
    
    /**
    * 在使用摄像头模块前需要对摄像头进行初始化
    */
    //% blockId=HTERobot_CameraInitialization block="摄像头初始化"
    //% group=pixy2
    export function CameraInitialization():void {
        while (true) {
            const arr = pinsArr();
            stax.setA(arr)
            const a = stax.getA();
            if (a.length > 12) {
                if (a[1] == 193 && a[0] == 175) {
                    return
                } 
            }else {
                return
            }
        }
    }

    /**
    * 得到摄像头返回的数据包
    */
    //% blockId=HTERobot_getA block="getA|%index|DegreeAcurrate %DegreeAcurrate"
    //% group=pixy2
    function getA(num:number):number {
        return stax.getA()[num];
    }

    /**
    * 超声波传感器获取可检测范围内距离最近的物体的距离值
    */
    //% blockId=HTERobot_GetUltrasonicdata block="超声波传感器 %index 距离 %distance_unit"
    //% group=模块
    //% weight=6 

    export function GetUltrasonicdata(index: ExpandDigitalPins,distance_unit: Distance_Unit): number {
        let pin = ReadExpandDigitalPin(index);
        // send pulse
        pins.setPull(pin, PinPullMode.PullNone)
        pins.digitalWritePin(pin, 0)
        control.waitMicros(2)
        pins.digitalWritePin(pin, 1)
        control.waitMicros(10)
        pins.digitalWritePin(pin, 0)

        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 23000)  // 8 / 340 = 
        let distance = d * 10 * 5 / 3 / 58

        if (distance > 4000) distance = 0

        switch (distance_unit) {
            case 0:
                return Math.round(distance) //mm
                break
            case 1:
                return Math.round(distance / 10)  //cm
                break
            case 2:
                return Math.round(distance / 25)  //inch
                break
            default:
                return 0

        }
   }

    /**
     * 温湿度传感器获取温度或湿度值
     * @param dht11pin describe parameter here, eg: DigitalPin.P15     */
    //% blockId="Temperature" block="温湿度传感器 %index %dht11type"
    //% group=模块
    //% weight=5
    export function Temperature(index: ExpandDigitalPins,dht11type: DHT11Type): number {
        let pin = ReadExpandDigitalPin(index);
        pins.digitalWritePin(pin, 0)
        basic.pause(18)
        let i = pins.digitalReadPin(pin)
        pins.setPull(pin, PinPullMode.PullUp);
        switch (dht11type) {
            case 0:
                let dhtvalue1 = 0;
                let dhtcounter1 = 0;
                while (pins.digitalReadPin(pin) == 1);
                while (pins.digitalReadPin(pin) == 0);
                while (pins.digitalReadPin(pin) == 1);
                for (let i = 0; i <= 32 - 1; i++) {
                    while (pins.digitalReadPin(pin) == 0);
                    dhtcounter1 = 0
                    while (pins.digitalReadPin(pin) == 1) {
                        dhtcounter1 += 1;
                    }
                    if (i > 15) {
                        if (dhtcounter1 > 2) {
                            dhtvalue1 = dhtvalue1 + (1 << (31 - i));
                        }
                    }
                }
                return ((dhtvalue1 & 0x0000ff00) >> 8);
                break;
            case 1:
                while (pins.digitalReadPin(pin) == 1);
                while (pins.digitalReadPin(pin) == 0);
                while (pins.digitalReadPin(pin) == 1);
                let dhtvalue = 0;
                let dhtcounter = 0;
                for (let i = 0; i <= 32 - 1; i++) {
                    while (pins.digitalReadPin(pin) == 0);
                    dhtcounter = 0
                    while (pins.digitalReadPin(pin) == 1) {
                        dhtcounter += 1;
                    }
                    if (i > 15) {
                        if (dhtcounter > 2) {
                            dhtvalue = dhtvalue + (1 << (31 - i));
                        }
                    }
                }
                return Math.round((((dhtvalue & 0x0000ff00) >> 8) * 9 / 5) + 32);
                break;
            case 2:
                while (pins.digitalReadPin(pin) == 1);
                while (pins.digitalReadPin(pin) == 0);
                while (pins.digitalReadPin(pin) == 1);

                let value = 0;
                let counter = 0;

                for (let i = 0; i <= 8 - 1; i++) {
                    while (pins.digitalReadPin(pin) == 0);
                    counter = 0
                    while (pins.digitalReadPin(pin) == 1) {
                        counter += 1;
                    }
                    if (counter > 3) {
                        value = value + (1 << (7 - i));
                    }
                }
                return value;
            default:
                return 0;
        }
    }

    /**
     * 土壤湿度传感器获取土壤湿度值 (0~100)
     * @param soilmoisturepin describe parameter here, eg: AnalogPin.P1
     */
    //% blockId="readsoilmoisture" block="土壤湿度传感器 %index (0~100)"
    //% group=模块
    //% weight=7
    export function ReadSoilHumidity(index: ExpandAnalogPins): number {
        let pin = ReadExpandAnalogPin(index);
        let voltage = 0;
        let soilmoisture = 0;
        voltage = pins.map(
            pins.analogReadPin(pin),
            0,
            1023,
            0,
            100
        );
        soilmoisture = voltage;
        return Math.round(soilmoisture)
    }

    /** 
     * 声音传感器获取分贝值 (dB)
     * @param noisepin describe parameter here, eg: AnalogPin.P1
     */
    //% blockId="readnoise" block="声音传感器 %index (dB)"
    //% group=模块
    //% weight=10
    export function ReadNoise(index: ExpandAnalogPins): number {
        let pin = ReadExpandAnalogPin(index);
        let level = 0
        let voltage = 0
        let noise = 0
        let h = 0
        let l = 0
        let sumh = 0
        let suml = 0
        for (let i = 0; i < 1000; i++) {
            level = level + pins.analogReadPin(pin)
        }
        level = level / 1000
        for (let i = 0; i < 1000; i++) {
            voltage = pins.analogReadPin(pin)
            if (voltage >= level) {
                h += 1
                sumh = sumh + voltage
            } else {
                l += 1
                suml = suml + voltage
            }
        }
        if (h == 0) {
            sumh = level
        } else {
            sumh = sumh / h
        }
        if (l == 0) {
            suml = level
        } else {
            suml = suml / l
        }
        noise = sumh - suml
        if (noise <= 4) {
            noise = pins.map(
                noise,
                0,
                4,
                30,
                50
            )
        } else if (noise <= 8) {
            noise = pins.map(
                noise,
                4,
                8,
                50,
                55
            )
        } else if (noise <= 14) {
            noise = pins.map(
                noise,
                9,
                14,
                55,
                60
            )
        } else if (noise <= 32) {
            noise = pins.map(
                noise,
                15,
                32,
                60,
                70
            )
        } else if (noise <= 60) {
            noise = pins.map(
                noise,
                33,
                60,
                70,
                75
            )
        } else if (noise <= 100) {
            noise = pins.map(
                noise,
                61,
                100,
                75,
                80
            )
        } else if (noise <= 150) {
            noise = pins.map(
                noise,
                101,
                150,
                80,
                85
            )
        } else if (noise <= 231) {
            noise = pins.map(
                noise,
                151,
                231,
                85,
                90
            )
        } else {
            noise = pins.map(
                noise,
                231,
                1023,
                90,
                120
            )
        }
        noise = Math.round(noise)
        return Math.round(noise)
    }

    /**
     * 光敏传感器获取光照强度值 (0~100)
     */
    //% blockId="readlightintensity" block="光敏传感器 %index (0~100)"
    //% group=模块
    //% weight=9
    export function ReadLightIntensity(index: ExpandAnalogPins): number {
        let pin = ReadExpandAnalogPin(index);
        let voltage = 0;
        let lightintensity = 0;
        voltage = pins.map(
            pins.analogReadPin(pin),
            0,
            1023,
            0,
            100
        );
        lightintensity = voltage;
        return Math.round(lightintensity)
    }
    /**
     * 温度传感器LM35DZ获取温度值
     */
    //% blockId="readtemperature" block="温度传感器 %index (0~100)"
    //% group=模块
    //% weight=8
    export function ReadTemperature(index: ExpandAnalogPins): number {
        let pin = ReadExpandAnalogPin(index);
        let voltage = 0;
        let temperature = 0;
        voltage = pins.analogReadPin(pin),
        temperature = voltage*330/1024;
        return Math.round(temperature)   
    }

    /**
     * 模拟传感器获取数据值
     */
    //% blockId="ReadAnalogSensor" block="模拟传感器 %index (0~1023)"
    //% group=模块
    //% weight=11
    export function ReadAnalogSensor(index: ExpandAnalogPins): number {
        let pin = ReadExpandAnalogPin(index);
        let data = 0;
        data = pins.analogReadPin(pin)
        return Math.round(data)   
    }
    /**
     * 数字传感器获取数据值
     */
    //% blockId="ReadDigitalSensor" block="数字传感器 %index (0/1)"
    //% group=模块
    //% weight=12
    export function ReadDigitalSensor(index: ExpandDigitalPins): number {
        let pin = ReadExpandDigitalPin(index);
        let data = 0;
        data = pins.digitalReadPin(pin)
        return Math.round(data)   
    }
}   