
import { isObjectIdOrHexString } from 'mongoose';

// import serialport from 'serialport';
// var SerialPort = serialport.SerialPort;
// var portName = process.argv[7];
//import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;

// const port = new SerialPort({
//     path: "COM3",
//     baudRate: 115200
//   })

class TemperatureSensor {
  constructor(n) {
  
  // this.port=null;
  }
  initateSensor() {
      console.log("initSensortp");
     
  }
  onSensor(callback){
      this.initateSensor();
      console.log("onSensortp");
     
  } 

  offSensor(){
      console.log("offSensortp");
  }


}






let tpSensor = new TemperatureSensor();
export default tpSensor;





















 


