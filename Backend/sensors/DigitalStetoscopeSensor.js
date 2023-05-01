
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

class DigitalStetoscopeSensor {
  constructor(n) {
  
  // this.port=null;
  }
  initateSensor() {
      console.log("initSensords");
     
  }
  onSensor(callback){
      this.initateSensor();
      console.log("onSensords");
     
  } 

  offSensor(){
      console.log("offSensords");
  }


}






let dsSensor = new DigitalStetoscopeSensor();
export default dsSensor;





















 


