
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

class EcgSensor {
  constructor(n) {
  
  // this.port=null;
  }
  initateSensor() {
      console.log("initSensorecg");
     
  }
  onSensor(callback){
      this.initateSensor();
      console.log("onSensorecg");
     
  } 

  offSensor(){
      console.log("offSensorecg");
  }


}






let ecgSensor = new EcgSensor();
export default ecgSensor;





















 


