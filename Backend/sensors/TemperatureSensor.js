
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

const ecgoff  = ["0x55", "0xAA" ,"0x04","0x01" ,"0x00", "0xFA"];
const spoff  = ["0x55", "0xAA" ,"0x04","0x03" ,"0x00", "0xF8"];
const tempoff  = ["0x55", "0xAA" ,"0x04","0x04" ,"0x00", "0xF7"];
const nibpoff  = ["0x55", "0xAA"," 0x04", "0x02", "0x00", "0xF9"]
const ecgwaveoff  = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x00", "0x00"];
const spwaveoff  = ["0x55", "0xAA" ,"0x04","0xFE" ,"0x00", "0xFD"];
const respoff  = ["0x55", "0xAA" ,"0x04","0xFF" ,"0x00", "0xFC"];


class TemperatureSensor {
//   constructor(n) {
  
//   // this.port=null;
//   }
//   initateSensor() {
//       console.log("initSensortp");
     
//   }
  onSensor(callback){
    //   this.initateSensor();
      console.log("onSensortp");
      port.write(spoff);
 
     
  } 

  offSensor(){
      console.log("offSensortp");
  }


}






let tpSensor = new TemperatureSensor();
export default tpSensor;





















 


