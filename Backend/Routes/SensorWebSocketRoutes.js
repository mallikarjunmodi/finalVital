import {response, Router} from "express";
// import sensorReadBp from "../sensors/bpSensor.js";
import bpSensor from "../sensors/BloodpSensor.js";
import glSensor from "../sensors/GlucoseSensor.js";
import tpSensor from "../sensors/TemperatureSensor.js";
import hrSensor from "../sensors/HeartRateSensor.js";
import dsSensor from "../sensors/DigitalStetoscopeSensor.js";
const SensorRouter = Router();
import {Server} from "socket.io";
import UserSchema from "../Models/User.js"
// import { UUID } from "Realm.BSON";

let data;

export default function(httpServer)
{
  
  const io=new Server(httpServer,{
    cors:{
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    }
  })
  //blood pressure
  io.on("connection",(socket)=>{
    //console.log(`User Connected: ${socket.id}`);
  //bp sensor
    socket.on("send_message_bp",(data)=>{
      console.log(data.message);
      if(data.message==="Start")
      {
        bpSensor.onSensor((sensorData)=>{
          socket.emit("bp_data",{data:sensorData})
        })
        // sensorReadBp((sensorData)=>{
        //   socket.emit("bp_data",{data:sensorData})
        // });
      }
      if(data.message==="Stop")
      {
        bpSensor.offSensor((sensorData)=>{
          socket.emit("bp_data",{data:"Sensor stopped"})
        })
      }

    })
//glucose sensor
    socket.on("send_message_gl",(data)=>{
      console.log(data.message);
      if(data.message==="Start")
      {
        glSensor.onSensor((sensorData)=>{
          socket.emit("gl_data",{data:sensorData})
        })
       
      }
      if(data.message==="Stop")
      {
        glSensor.offSensor((sensorData)=>{
          socket.emit("gl_data",{data:"Sensor stopped"})
        })
      }



    })
 // temperature sensor
    socket.on("send_message_bt",(data)=>{
      console.log(data.message);
      if(data.message==="Start")
      {
        tpSensor.onSensor((sensorData)=>{
          socket.emit("bt_data",{data:sensorData})
        })
       
      }
      if(data.message==="Stop")
      {
        tpSensor.offSensor((sensorData)=>{
          socket.emit("bt_data",{data:"Sensor stopped"})
        })
      }



    })

   //heart Rate sensor 
    socket.on("send_message_hr",(data)=>{
      console.log(data.message);
      if(data.message==="Start")
      {
        hrSensor.onSensor((sensorData)=>{
          socket.emit("hr_data",{data:sensorData})
        })
       
      }
      if(data.message==="Stop")
      {
        hrSensor.offSensor((sensorData)=>{
          socket.emit("hr_data",{data:"Sensor stopped"})
        })
      }
    })
 //digital stetoscope sensor
      socket.on("send_message_ds",(data)=>{
        console.log(data.message);
        if(data.message==="Start")
        {
          dsSensor.onSensor((sensorData)=>{
            socket.emit("ds_data",{data:sensorData})
          })
         
        }
        if(data.message==="Stop")
        {
          dsSensor.offSensor((sensorData)=>{
            socket.emit("ds_data",{data:"Sensor stopped"})
          })
        }

    })
 //ecg sensor
    socket.on("send_message_ecg",(data)=>{
      console.log(data.message);
      if(data.message==="Start")
      {
        dsSensor.onSensor((sensorData)=>{
          socket.emit("ecg_data",{data:sensorData})
        })
       
      }
      if(data.message==="Stop")
      {
        dsSensor.offSensor((sensorData)=>{
          socket.emit("ecg_data",{data:"Sensor stopped"})
        })
      }

  })


   
});
}