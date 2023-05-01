
import { isObjectIdOrHexString } from 'mongoose';
import port from './index.js';

const command = ["0X55", "0XAA", "0X04", "0X03", "0X1","0XF7"];
const bpOn =  ["0X55", "0XAA", "0X04", "0X02", "0X01" , "0XF8"] ;
const ecgOn  = ["0x55", "0xAA" ,"0x04","0x01" ,"0x01", "0xF9"];
const ecgwave = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x01", "0xFF"];

const ecgoff  = ["0x55", "0xAA" ,"0x04","0x01" ,"0x00", "0xFA"];
const spoff  = ["0x55", "0xAA" ,"0x04","0x03" ,"0x00", "0xF8"];
const tempoff  = ["0x55", "0xAA" ,"0x04","0x04" ,"0x00", "0xF7"];
const nibpoff  = ["0x55", "0xAA"," 0x04", "0x02", "0x00", "0xF9"]
const ecgwaveoff  = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x00", "0x00"];
const spwaveoff  = ["0x55", "0xAA" ,"0x04","0xFE" ,"0x00", "0xFD"];
const respoff  = ["0x55", "0xAA" ,"0x04","0xFF" ,"0x00", "0xFC"];

// const readings={
//     spo2:0,
//     hr:0,
//     state:"continue"
//   }

let counter=0;



class HeartRateSensor {
//   constructor(n) {
  
//   // this.port=null;
//   }
//   initateSensor() {
//       console.log("initSensorhr");
     
//   }
  onSensor(callback){
    //   this.initateSensor();
      console.log("onSensorhr");
port.write(spoff);
port.write(nibpoff);
port.write(tempoff);
port.write(spwaveoff);
port.write(respoff);
port.write(ecgoff);
port.write(ecgwaveoff);

port.write( command , function (err) {
    if (err) {
      return console.log("Error on write: ", err.message);
    }
    console.log("message written");
    //console.log("ha",data);
  });


  
  // Listen for new data
  port.on('data', async function(data) {
    Buffer.from(data,'base64').toString();
    // console.log("data",data);
  
    console.log("spO2 =" + data[5] + "   heart rate =" + data[6] +" state=" + data[4] )
    if(data[4]===0 && counter!= 10)
    { 
        counter++;
       const readings={
           spo2:data[5],
           hr:data[6],
           state: counter===10 ? "end":"continue"
         }
         console.log("reading",readings)
         callback(readings);
    }
    else if(counter === 10)
    {
        console.log("offSensorhr");
        port.write(spoff); 
        port.close();
    }
    else{
        counter=0;
    }
    
  
  });
 
  
  
//   port.on('data', async function(data) {
//     Buffer.from(data,'base64').toString();
//     console.log("data",data);

//     console.log("spO2 =" + data[5] + "   heart rate =" + data[6] )
//     const readings={
//         spo2:data[5],
//         hr:data[6],
//         state:data[2]===5 ? "end" :data[2]===2 ? "start" : "continue"
//       }
//     callback(readings);
     
//   }) 

}

  offSensor(){
      console.log("offSensorhr");
      port.write(spoff);
      port.close();
  }


}






let hrSensor = new HeartRateSensor();
export default hrSensor;





















 


