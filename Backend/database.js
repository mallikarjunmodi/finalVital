import Realm from "realm";
import SensorSchema from "./Models/SensorSchema.js";
import UserSchema from "./Models/User.js";


let realm;
async function openRealm() {
  realm = await Realm.open({
    schema: [UserSchema, SensorSchema],
    path: "testDatabase",
  });
  // rest of your code using the realm instance
  console.log(`Opened Realm database with path: ${realm.path}`);
}

openRealm();    
 export default realm
    
    
    // let user1, user2;
    // realm.write(() => {
    //     user1 = realm.create("UserSchema", {
    //         _id:1234 ,
    //         name: "amjad",
    //         gender: "male",
    //         email: "amjad@1",
    //         password: "string",
    //         phoneNumber: "9526104187",
    //   });
    //   user2 = realm.create("UserSchema", {
    //     _id:123 ,
    //     name: "tom",
    //     gender: "male",
    //     email: "tom@1",
    //     password: "string",
    //     phoneNumber: "9526104187",
    //     });
        
    // }); 
    // const tasks = realm.objects("UserSchema");
    // console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`);
    // realm.close();
    
