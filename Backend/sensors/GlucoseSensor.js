
import { isObjectIdOrHexString } from 'mongoose';
 import port from './serialport';

import serialport from 'serialport';
var SerialPort = serialport.SerialPort;
var portName = process.argv[7];
//import SensorSchema from '../Models/SensorSchema.js';
//var Buffer =  require('buffer/').Buffer;

//const port = new SerialPort({
 //   path: "/dev/ttyUSB1",
 //   baudRate: 9600
 // })

const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];

class GlucoseSensor {

  
  onSensor(callback){
     
      console.log("onSensorgl");
      
 

  // port.write( command , function (err) {
  //   if (err) {
  //     return console.log("Error on write: ", err.message);
  //   }
  //   console.log("message written");
  // });

  port.on('data', function(data) {
    console.log(data);
     



      //get the reading and return using the callback
      // callback(readings);
    });
  }
  

  offSensor(){
      console.log("offSensorgl");
  }


}






let glSensor = new GlucoseSensor();
export default glSensor;


















// export default function sensorReadGl (callback) {


 


