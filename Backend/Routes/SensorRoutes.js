import {response, Router} from "express";
import {check,validationResult} from "express-validator";
import auth from "../Middleware/auth.js";
import SensorSchema from "../Models/SensorSchema.js"
import UserSchema from "../Models/User.js"
// import { UUID } from "Realm.BSON";
import realm from "../database.js";
import dotenv from "dotenv";

import { v4 as uuidv4 } from 'uuid';

const SensorRouter = Router();

dotenv.config();




SensorRouter.get('/dashboard',async(req,res)=>
{
  try{
    const nestedList = [ { type: "bp", value: 20, },{ type: "hr", value: 20, },{ type: "bg", value: 20, },{ type: "bt", value: 20, },{ type: "ds", value: 20, },{ type: "ot", value: 20, },{ type: "ecg", value: 20, } ]; 
    console.log(nestedList); 
    console.log("dashboard here");
    const realm = new Realm({
      path: "testDatabase",
      schema: [UserSchema,SensorSchema],
    });
    // let sensor = realm.objects("sensorschema");
    //  const lastBpData = realm.objects("sensorschema").filtered('type = "bp"').SORT((a, b) =>b.timestamp < a.timestamp ? -1 : b.timestamp > a.timestamp ? 1 : 0);
    const lastBpData = realm.objects("sensorschema").filtered('type = "bp"').SORT(DESC,timestamp);

    // const lastBpData = realm.objects("sensorschema").filtered('type = "bp"');
    console.log("lastBpData", lastBpData.map((data) => data.value));

    console.log("DATA:", lastBpData[0].value);
    // console.log(`The lists of users are: ${users.map((user) => user.name)}`);
    // let filteredsensor = sensor.filtered("type == $0" , "bp");
    // console.log(`The lists of sensor are: ${filteredsensor.map((user) => user.value)}`);
    //  sensorData = realm.where(SensorData.class)
    // .equalTo("type", "bp")
    // .sort("lastUpdated", Sort.DESCENDING)
    // .limit(1)
    // .findAll();
    // console.log(`The lists of tasks are: ${sensors.map((task) => task.value)}`);
    // console.log("sensors here",sensors);
    // sensors.forEach(sensor => {
    //   const lastData = realm.objects('sensorschema').filtered(`id=${sensor.id}`).sorted('lastUpdated', true).slice(0, 1)[0];
    //   console.log(`Sensor ${sensor.id}: ${lastData.value} (last updated on ${lastData.lastUpdated})`);
    // });
    // const sensors = realm.objects("sensorschema").sorted("lastUpdated", true);
    // const lastDataForSensors = [];
    // const sensorIds = new Set();

    // sensors.forEach(sensor => {
    //   if (!sensorIds.has(sensor.id)) {
    //     lastDataForSensors.push(sensor);
    //     sensorIds.add(sensor.id);
    //   }
    // });

// console.log(lastDataForSensors);
    //   const sensorReadings = realm.objects("sensorschema");
    //   console.log("Number of documents in sensorReadings:", sensorReadings.length);
    //   // const tasks = realm.objects("UserSchema");
    //   // console.log(`The lists of tasks are: ${tasks.map((task)
    //   console.log("sensorReadings",sensorReadings);
    //   console.log(`The lists of tasks are: ${sensorReadings.map((task) => task.value)}`); 
    //   const latestReadings = await sensorReadings.aggregate([
    //   { $group: { _id: "$type", value: { $last: "$value" } , timestamp: { $last: "$_id" }} },
    //   { $sort: { timestamp: -1 } },
    // ]).toArray();
    
    // console.log(latestReadings);
    

  }
  catch(err){

  }
})

SensorRouter.post('/btsensor', async(req, res) =>
{
  try{
    
    console.log("btSensor req",req.body);
  }
  catch(err)
  {

  }

})
SensorRouter.post('/dssensor', async(req, res) =>
{
  try{
    
    console.log("dsSensor req",req.body);
  }
  catch(err)
  {

  }

})
SensorRouter.post('/ecgsensor', async(req, res) =>
{
  try{
    
    console.log("ecgSensor req",req.body);
  }
  catch(err)
  {

  }

})
SensorRouter.post('/hrsensor', async(req, res) =>
{
  try{
    
    console.log("hrSensor req",req.body);
  }
  catch(err)
  {

  }

})
SensorRouter.post('/glsensor', async(req, res) =>
{
  try{
    
    console.log("glSensor req",req.body);
  }
  catch(err)
  {

  }

})

SensorRouter.post('/bpsensor', async(req, res) =>
{
  try{
    
    console.log("bpSensor req",req.body);
    let sys=req.body.sis;
    let dia=req.body.dia;
    let pulse=req.body.pulse;

    let {type,value,} =req.body;
    // let dataValue=
    const realm = new Realm({
      path: "testDatabase",
      schema: [UserSchema,SensorSchema],
    });
    // console.log("sensor value", type,value);
      
      
    let newSensorReadingSys,newSensorReadingDia,newSensorReadingHr ; 
    realm.write(() => {
        newSensorReadingSys= realm.create("sensorschema", {
            _id:uuidv4(),
            _idUser:"2",
            type:"sys",
            value:100,
            timestamp: new Date()
      });}
    )
       console.log("newSensorReadingSys",newSensorReadingSys);

       realm.write(() => {
        newSensorReadingDia= realm.create("sensorschema", {
            _id:uuidv4(),
            _idUser:"2",
            type:"dia",
            value:dia,
            timestamp: new Date()
      });}
    )
    console.log("newSensorReadingDia",newSensorReadingDia);
    
    realm.write(() => {
      newSensorReadingHr= realm.create("sensorschema", {
        _id:uuidv4(),
        _idUser:"2",
        type:"pulse",
        value:pulse,
        timestamp: new Date()
      });}
      )
      console.log("newSensorReadingHr",newSensorReadingHr);

      //  const id = newSensorReading.value;
      //  console.log(id); 
      return res.status(200).json({msg: "sensor read successfully", data: {data:"here"}, errors: []})
    
    }
    catch(err){
        console.log(err);
        return res.status(400).json({errors:[{msg: err.message}]});
    } 
});


SensorRouter.get('/:id',auth,async(req, res) => {
    try{ 
     const userId=req.params.id;
     let sensorValue = realm.objects("SensorSchema");
     //console.log(`The lists of users are: ${users.map((user) => user.name)}`);
      let filtereduser = users.filtered("_id == $0" , userId);
     console.log(`The lists of users are: ${filtereduser.map((user) => user.name)}`);
   
     
   
   
     if(!filtereduser)
     {
       throw new Error("User not found!");
     }
     else{
       const userData={
         _id:filtereduser.map((user) => user._id).pop(), 
         name:filtereduser.map((user) => user.name).pop(),
         gender:filtereduser.map((user) => user.gender).pop(),
         email: filtereduser.map((user) => user.email).pop(),
         password: filtereduser.map((user) => user.password).pop(),
         phoneNumber: filtereduser.map((user) => user.phoneNumber).pop(),
       }
       return res.status(200).json(userData);
         
     }
    }
    catch (err)
    {
     res.status(400).json({errors:[{msg: err.message}]});
    }
   });
   

SensorRouter.get('/bpfetchsensor',async(req, res) => {
  try{ 
    
   if(!data)
   {
     throw new Error("Sensor Not Working!");
   }
   else{
    
     return res.status(200).json(data);
       
   }
  }
  catch (err)
  {
   res.status(400).json({errors:[{msg: err.message}]});
  }
 });



export default SensorRouter;
