import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];

// import SerialPort from 'serialport';

const port = new SerialPort({
      path: "COM4",
      baudRate: 115200
      
    })

export default port;