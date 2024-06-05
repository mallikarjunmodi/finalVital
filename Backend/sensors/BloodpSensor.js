// import serialport from 'serialport';
// var SerialPort = serialport.SerialPort;
// var portName = process.argv[7];
import port from './index.js';
//remove all the sngle comment while sensore there
  const command = ["0XBE", "0XB0", "0X01", "0Xc0", "0X36"];

  const ecgoff  = ["0x55", "0xAA" ,"0x04","0x01" ,"0x00", "0xFA"];
  const spoff  = ["0x55", "0xAA" ,"0x04","0x03" ,"0x00", "0xF8"];
  const tempoff  = ["0x55", "0xAA" ,"0x04","0x04" ,"0x00", "0xF7"];
  const nibpoff  = ["0x55", "0xAA"," 0x04", "0x02", "0x00", "0xF9"]
  const ecgwaveoff  = ["0x55", "0xAA" ,"0x04","0xFB" ,"0x00", "0x00"];
  const spwaveoff  = ["0x55", "0xAA" ,"0x04","0xFE" ,"0x00", "0xFD"];
  const respoff  = ["0x55", "0xAA" ,"0x04","0xFF" ,"0x00", "0xFC"];

class BpSensor {
   
    
    onSensor(callback){

        console.log("initSensorBp");
 
     //   port.write(command)
        port.write(spoff);
        port.write(nibpoff);
        port.write(tempoff);
        port.write(spwaveoff);
        port.write(respoff);
        port.write(ecgoff);
        port.write(ecgwaveoff);
        port.write(command);

        console.log("onSensorBp");
        port.on('data', async function(data) {
            //console.log("data",Buffer.from(data,'base64').toString());
            console.log("data",data.toString("hex"));
            const readings={
              sys:data[4],
              dia:data[5],
              pulse:data[6],
              state:data[2]===5 ? "end" :data[2]===2 ? "start" : "continue"
            }
            //  const readings={
            //   sis:100,
            //   dia:20,
            //   hrate:30,
            //   state:"end"
            // }
            
            console.log("data",readings);
            
            callback(readings);
            
            const statusCode=parseInt(data[2],16);
        
            if(data[2] == 5)
           {
            //   buffer.push(data);
              
              port.emit("endBp")
              port.close();
            // realm.write(() => {
            //     sensor1 = realm.create("SensorSchema", {
            //         _id:1234,
            //         name: "bp",
            //         value : value,
            //   });
                
            //});
            }
            if(data[2] == 5)
            port.close();
            console.log("port closed Bp");
             
              // for(i=0;i<data)
              // console.log("cuff pressure "+ data[5]*2 + ", sys =" + data[6] + ", dia = " + data[8] )
              
            })



 } 

 offSensor(){
    port.close();
}
    

  }
  





  let bpSensor = new BpSensor();
  export default bpSensor;
//   document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age() + " years old.";
