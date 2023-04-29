
import { isObjectIdOrHexString } from 'mongoose';
import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
//import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;

// const port = new SerialPort({
//     path: "COM3",
//     baudRate: 115200
//   })

class HeartRateSensor {
  constructor(n) {
  
  // this.port=null;
  }
  initateSensor() {
      console.log("initSensorhr");
     
  }
  onSensor(callback){
      this.initateSensor();
      console.log("onSensorhr");
     
  } 

  offSensor(){
      console.log("offSensorhr");
  }


}






let hrSensor = new HeartRateSensor();
export default hrSensor;





















 


