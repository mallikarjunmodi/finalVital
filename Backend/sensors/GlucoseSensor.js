
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

class GlucoseSensor {
  constructor(n) {
  
  // this.port=null;
  }
  initateSensor() {
      console.log("initSensorgl");
      // this.port = new SerialPort({
      //     path: "COM4",
      //     baudRate: 115200
          
      //   });
      // const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];


      // port.write( command , function (err) {
      //   if (err) {
      //     return console.log("Error on write: ", err.message);
      //   }
      //   console.log("message written");
      //   //console.log("ha",data);
      // });
  }
  onSensor(callback){
      this.initateSensor();
      console.log("onSensorgl");
      //   const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];
 

//   port.write( command , function (err) {
//     if (err) {
//       return console.log("Error on write: ", err.message);
//     }
//     console.log("message written");
//   });

//   port.on('data', function(data) {
//     console.log(data);
//       // for(i=0;i<data)
//       // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )



//       //get the reading and return using the callback
//       callback(readings);
//     });
//   }
  } 

  offSensor(){
      console.log("offSensorgl");
  }


}






let glSensor = new GlucoseSensor();
export default glSensor;


















// export default function sensorReadGl (callback) {


 


