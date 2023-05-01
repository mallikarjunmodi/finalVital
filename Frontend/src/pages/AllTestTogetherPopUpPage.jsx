import React from "react";
import "./style/allTestPopUpPage.css";
import Header from "../components/HeaderBar";
import { useEffect, useState } from "react";


// import Bp2_Pop from "../components/Bp2Pop";
import Bp_1 from "../components/popup/assets/BP_1.png";
import Bp_2 from "../components/popup/assets/BP_2.svg";
import Bp_3 from "../components/popup/assets/BP_3.svg";
import Bp_4 from "../components/popup/assets/BP_4.svg";
import Bp_5 from "../components/popup/assets/BP_5.svg";
import Bp_6 from "../components/popup/assets/BP_6.svg";
import Bp_7 from "../components/popup/assets/BP_7.svg";

import BpStartPopUp from "../components/popup/AllTestSeperate/BpStart";
import BloodPressureFetch from "../components/popup/AllTestSeperate/BloodPressureStop";
import BloodPressureReading from "../components/popup/AllTestSeperate/BpReadingsPop";
import BPSysAndDiaResult from "../components/popup/AllTestTogether/BPSysAndDiaResult";


import HR_1 from "../components/popup/assets/HR_1.svg";
import HR_2 from "../components/popup/assets/HR_2.svg";
import HR_3 from "../components/popup/assets/HR_3.svg";
import HR_Fetch from "../components/popup/AllTestSeperate/HeartRateEndpopup";
import HRCircularBarResult from "../components/popup/AllTestTogether/HRCircularBarResult";
import HrFinalReading from "../components/popup/AllTestTogether/HrFinalResult";

import BT_1 from "../components/popup/assets/BT_1.svg";
import BT_2 from "../components/popup/assets/BT_2.svg";
import BT_3 from "../components/popup/assets/BT_3.svg";
import BT_5 from "../components/popup/assets/BT_5.svg";
import BTFrame3 from "../components/popup/AllTestTogether/BTFrame3";
import BT_Fetch from "../components/popup/AllTestSeperate/BodyTemperatureStop";
import CircularBarResult from "../components/popup/AllTestTogether/CircularBarResult";


import DS_1 from "../components/popup/assets/DS_1.svg";
import DS_2 from "../components/popup/assets/DS_2.svg";
import DS_Lungs from "../components/popup/assets/DS_Lungs.png";
import DS_Bowel from "../components/popup/assets/DS_Bowel.svg";
import DS_Heart from "../components/popup/assets/DS_Heart.svg";
// import DS_4 from "../components/popup/assets/DS_4.svg";
import DS_5 from "../components/popup/assets/DS_5.svg";
import DSPopUpFrame from "../components/popup/AllTestTogether/DigitalStethoscopePopUp";
import DSSysAndDiaResult from "../components/popup/AllTestTogether/DSSysAndDiaResult";
import DsCircularBar from "../components/popup/AllTestTogether/DsCircularBar";

import PopUpFrame from "../components/popup/AllTestTogether/PopUpFrame";
import PopUpFrame2 from "../components/popup/AllTestTogether/PopUpFrame2";

import AllTestResult from "../components/popup/AllTestTogether/AllTestResult";


import {
  Link,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import api from "../api";
import CandleStickGraph from "../components/graphs/CandleStickGraph";

import { sendBpSensorValue,sendEcgSensorValue,sendHrSensorValue,sendBtSensorValue,sendDsSensorValue,sendGlSensorValue} from "../url/url";
import io from "socket.io-client";
import useLocalStorageRef from "../hooks/LocalStorage";
const socket = io.connect("http://localhost:5000");

const AllTestTogetherPopUps = (props) => {
  const [bpData, setBpData] = useState({ sys: 0, dia: 0, pulse: 0 });   // setData({ ...data, sys: event.target.value });
  const [btData, setBtData] = useState(96);
  const [dsData, setDsData] = useState({ sys: 0, dia: 0,pulse: 0});
  const [data, setData] = useState();
  const [hrData, setHrData] = useState({ spo2: 0, hr:0 }); 
  const [popUpSequence, setPopupSequence] = useState("HR_1");

  const navigate = useNavigate();
  const location=useLocation();

  function SensorStop(text) {
    socket.emit(text, { message: "Stop" });
  }
  
  function SensorRead(callback,text,url) {
    console.log(callback);
    socket.emit(text[0], { message: "Start" });
  
    socket.on(text[1], (data) => {
      console.log("data: ", data.data);
  
      if (data.data.state === "end") {
        console.log("backsend data", data.data);
        let sensorData = data.data;
        api
          .post(url, sensorData, {
            headers: {
              "Content-Type": "application/json",
              Accept: "*/*",
            },
          })
          .then((res) => {
            console.log(res.status, res.data);
          })
          .catch((err) => new Error(err));
      }
      callback(data.data);
    });
  }
  





  //Body Temperature
  if (popUpSequence === "BT_1")
    return (
      <PopUpFrame2
        heading={"How to record Body Temperature"}
        instruction={
          "Place the thermometer under your tongue, in your armpit, or in your rectum depending on the type of thermometer you have. "
        }
        instruction2={
          "Make sure the thermometer is touching skin and not clothing."
        }
        button1={"Next"}
        image_main={BT_1}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BT_2");
        }}
      />
    );
    else if (popUpSequence === "BT_2")
    return (
      <PopUpFrame2
        heading={"How to record Body Temperature"}
        instruction={
          "Wait for the thermometer to beep, indicating that it has finished taking your temperature."
        }
        instruction2={
          "This usually takes about 30 seconds to 1 minute"
        }
        button1={"Next"}
        image_main={BT_2}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BT_3");
        }}
      />
    );
    else if (popUpSequence === "BT_3")
    return (
      <BTFrame3 
        isgreen={true}
        heading={"How to record Body Temperature"}
        instruction={
          "Remove the thermometer from your mouth, armpit, or rectum, and read the temperature."
        }
        instruction2={
          "Normal body temperature is usually between 97°F (36.1°C) and 99°F (37.2°C)."
        }
        button1={"Next"}
        image_main={BT_3}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BT_4");
        }}
      />

    );
     else if (popUpSequence === "BT_4")
    return (
      <BTFrame3 
        isgreen={false}
        heading={"How to record Body Temperature"}
        instruction={
          "If your temperature is above normal, take note of any other symptoms you may be experiencing, such as a cough, sore throat, or body aches. "
        }
        instruction2={
          "This may indicate that you have a fever and should seek medical attention."
        }
        button1={"Next"}
        image_main={BT_3}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BT_5");
        }}
      />
    );
    else if (popUpSequence === "BT_5")
    return (
      <PopUpFrame2
        heading={"How to record Body Temperature"}
        instruction={
          "Clean the thermometer with soap and water or rubbing alcohol before putting it away."
        }
        instruction2={
          "Store it in a safe and dry place until you need to use it again."
        }
        button1={"Start test"}
        image_main={BT_5}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BT_FETCH");
          
          SensorRead((data)=>{
            setBtData({sys:data.sis, dia:data.dia});
             if(data.state==="end")
             {
              setPopupSequence("BT_Reading")
             }
              console.log("btData",btData)}

              ,["send_message_bt","bt_data"],sendBtSensorValue
              );
        }
        }
      />
    );
    else if (popUpSequence === "BT_FETCH")
    return (
      <BT_Fetch
        setinitateTestPopUp={'wear device and press "start".'}
        data={bpData}
        onExitClick={props.onExitClick}
        onContinueClick={props.onContinueClick}
        onStopClick={() => {
         
            SensorStop("send_message_bt");
            setPopupSequence("BT_Reading");
          }}
      />
    ); 
    else if (popUpSequence === "BT_Reading")
    return (
      <CircularBarResult
      sign="℉"
      data={btData}
      onExitClick={props.onExitClick}
      onContinueClick={()=>{
        setPopupSequence("All_Result");
      }}
      />
    );
    else if (popUpSequence === "All_Result")
    return (
      <AllTestResult
      
      btdata={btData}
      hrdata={hrData}
      bpdata={bpData}

      onExitClick={props.onExitClick}
      onContinueClick={()=>{
        navigate("/dashboard");
      }}
      />
    );   



    
    //Digital Stethoscope 
   else if (popUpSequence === "DS_1")
    return (
      <PopUpFrame
        heading={"Instructions"}
        instruction={
          "Place the chest piece on the area you or the doctor want to listen to. The area should be clean and free from clothing or any other obstruction."
        }
       
        button1={"Next"}
        image_main={DS_1}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("DS_2");
        }}
      />
    );
    else if (popUpSequence === "DS_2")
    return (
      <PopUpFrame
      heading={"Instructions"}
      instruction={
        "Place the chest piece on the area you or the doctor want to listen to. The area should be clean and free from clothing or any other obstruction."
      }
     
      button1={"Next"}
      image_main={DS_2}
      onExitClick={props.onExitClick}
      onContinueClick={() => {
        setPopupSequence("DS_3");
      }}
    />
      // <DSPopUpFrame
      //   heading={"Instructions"}
      //   instruction={
      //     "Place the chest piece on the area you or the doctor want to listen to. The area should be clean and free from clothing or any other obstruction."
      //   }
       
      //   button1={"Next"}
      //   image_main={DS_2}
      //   onExitClick={props.onExitClick}
      //   onContinueClick={() => {
      //     setPopupSequence("DS_3");
      //   }}
      // />
    );
    else if (popUpSequence === "DS_3")
    return (
      <PopUpFrame
        heading={"Instructions"}
        instruction={
          "Set to the appropriate mode, such as heart, lung, or bowel sounds and click on start."
        }
       
        button1={"Next"}
        image_main={Bp_3}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("DS_4");
        }}
      />
    );

    else if (popUpSequence === "DS_4")
    return (
      <PopUpFrame
        heading={"Instructions"}
        instruction={
          "Move the chest piece around (as per doctor’s instruction during tele-consultation) to find the best location to hear the sound you're trying to listen to."
        }
       
        button1={"Next"}
        image_main={DS_Heart}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("DS_5");
        }}
      />
    );

    else if (popUpSequence === "DS_6")
    return (
      <PopUpFrame
        heading={"Instructions"}
        instruction={
          "Move the chest piece around (as per doctor’s instruction during tele-consultation) to find the best location to hear the sound you're trying to listen to."
        }
       
        button1={"Next"}
        image_main={DS_Lungs}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("DS_5");
        }}
      />
    );

    else if (popUpSequence === "DS_7")
    return (
      <PopUpFrame
        heading={"Instructions"}
        instruction={
          "Move the chest piece around (as per doctor’s instruction during tele-consultation) to find the best location to hear the sound you're trying to listen to."
        }
       
        button1={"Next"}
        image_main={DS_Bowel}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("DS_5");
        }}
      />
    );

    else if (popUpSequence === "DS_5")
    return (
      <PopUpFrame
        heading={"Instructions"}
        instruction={
          "Clean the chest piece and ear tips with alcohol wipes or disinfectant spray after each use."
        }
       
        button1={"Start test"}
        image_main={DS_5}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("DS_Reading");
          SensorRead((data)=>{
            setDsData(data);
             if(data.state==="end")
             {
              setPopupSequence("DS_Result")
             }
              console.log("dsData",bpData)}

              ,["send_message_ds","ds_data"],sendDsSensorValue
              );
        }}
      />
    );
    else if (popUpSequence === "DS_Reading")
    return (
      <DsCircularBar
     
        onExitClick={props.onExitClick}
        
        onStopClick={() => {
            SensorStop("send_message_ds");
            setPopupSequence("DS_Result");
          }}
      />
    );
    else if (popUpSequence === "DS_Result")
    return (
      <DSSysAndDiaResult
     
        onExitClick={props.onExitClick}
        data={dsData}
        onStopClick={() => {
            SensorStop("send_message_ds");
            setPopupSequence("DS_Reading");
          }}
      />
    );


    
 



// Blood Pressure 
  else if (popUpSequence === "BP_1")
    return (
      <PopUpFrame
        heading={"How to record Blood Pressure"}
        instruction={
          "Sit down in a quiet, comfortable place.  Make sure your feet are flat on the ground and your arm is supported at heart level."
        }
        button1={"Next"}
        image_main={Bp_1}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BP_2");
        }}
      />
    );
  else if (popUpSequence === "BP_2")
    return (
      <PopUpFrame
        heading={"How to record Blood Pressure"}
        instruction={
          "Position the cuff around your upper arm, two to three fingers width above the bend of your elbow."
        }
        button1={"Next"}
        image_main={Bp_2}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BP_3");
        }}
      />
    );
  else if (popUpSequence === "BP_3")
    return (
      <PopUpFrame
        heading={"How to record Blood Pressure"}
        instruction={
          "Press the start button on the blood pressure monitor and wait for it to inflate the cuff."
        }
        button1={"Next"}
        image_main={Bp_3}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BP_4");
        }}
      />
    );
  else if (popUpSequence === "BP_4")
    return (
      <PopUpFrame
        heading={"How to record Blood Pressure"}
        instruction={
          "As the cuff inflates, you may feel some pressure on your arm, but it shouldn't be uncomfortable."
        }
        button1={"Next"}
        image_main={Bp_4}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BP_5");
        }}
      />
    );
  else if (popUpSequence === "BP_5")
    return (
      <PopUpFrame
        heading={"How to record Blood Pressure"}
        instruction={
          "Wait for the monitor to deflate the cuff, and record your systolic and diastolic blood pressure readings."
        }
        button1={"Start test"}
        image_main={Bp_5}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BP_Fetch");
          SensorRead((data)=>{
            console.log("data",data);
            setBpData(data);
             if(data.state==="end")
             {
              setPopupSequence("BP_Reading")
             }
              console.log("bpData",bpData)}

              ,["send_message_bp","bp_data"],sendBpSensorValue
              );
        }}
      />
    );
    // else if (popUpSequence === "BP_START") return(<BpStartPopUp setinitateTestPopUp={"wear device and press \"start\"."} onExitClick={props.onExitClick} onContinueClick={()=>{setPopupSequence("BP_FETCH");SensorRead((data)=>{setBpData(data); if(data.state==="end"){setPopupSequence("BP_READING")} console.log("bpData",bpData)} ,"");}} />);
    else if (popUpSequence === "BP_Fetch")
      return (
        <BloodPressureFetch
          setinitateTestPopUp={'wear device and press "start".'}
          data={bpData}
          onExitClick={props.onExitClick}
          onStopClick={() => {
            console.log("bp here")
            SensorStop("send_message_bp");
            setPopupSequence("BT_1");
          }}
        />
      );
      else if (popUpSequence === "BP_Result")
      return (<>
           <h1>hi</h1>
        <CircularBarResult
            sign="mm Hg"
            data={bpData}
            onExitClick={props.onExitClick}
            onContinueClick={
              setPopupSequence("BP_Fetch")
            }
         />
      </>
      ); 

      else if (popUpSequence === "BP_Reading")
      return (
        <BPSysAndDiaResult  data={bpData}/>
      );  
      



    // else if (popUpSequence === "BP_6")
    //   return (
    //     <PopUpFrame
    //       heading={"How to record Blood Pressure"}
    //       instruction={
    //         " As the cuff inflates, you may feel some pressure on your arm, but it shouldn't be uncomfortable."
    //       }
    //       button1={"Next"}
    //       image_main={Bp_7}
    //       onExitClick={props.onExitClick}
    //       onContinueClick={() => {
    //         setPopupSequence("BP_Fetch");
    //       }}
    //     />
    //   );
  // else if (popUpSequence === "BP_6")
  //   return (
  //     <PopUpFrame
  //       heading={"How to record Blood Pressure"}
  //       instruction={
  //         "Sit down in a quiet, comfortable place.  Make sure your feet are flat on the ground and your arm is supported at heart level."
  //       }
  //       button1={"Next"}
  //       image_main={Bp_6}
  //       onExitClick={props.onExitClick}
  //       onContinueClick={() => {
  //         setPopupSequence("BP_7");
  //       }}
  //     />
  //   );
  // else if (popUpSequence === "BP_7")
  //   return (
  //     <PopUpFrame
  //       heading={"How to record Blood Pressure"}
  //       instruction={
  //         "Press the start button on the blood pressure monitor and wait for it to inflate the cuff."
  //       }
  //       button1={"Next"}
  //       image_main={Bp_7}
  //       onExitClick={props.onExitClick}
  //       onContinueClick={() => {
  //         setPopupSequence("BP_8");
  //       }}
  //     />
  //   );
  // else if (popUpSequence === "BP_9")
  //   return (
  //     <PopUpFrame
  //       heading={"How to record Blood Pressure"}
  //       instruction={
  //         " Wait for the monitor to deflate the cuff, and record your systolic and diastolic blood pressure readings."
  //       }
  //       button1={"Start"}
  //       image_main={Bp_7}
  //       onExitClick={props.onExitClick}
  //       onContinueClick={() => {
  //         setPopupSequence("BP_FETCH");
  //       }}
  //     />
  //   );
  else if (popUpSequence === "BP_READING")
    return (
      <BloodPressureReading
        setinitateTestPopUp={'wear device and press "start".'}
        data={bpData}
        onExitClick={props.onExitClick}
        onContinueClick={props.onContinueClick}
      />
    );


  //Heart Rate pop up begins
  else if (popUpSequence === "HR_1")
    return (
      <PopUpFrame
        heading={"How to record Heart Rate & SpO2"}
        instruction={
          "1.wash your hands with soap and warm water, and dry them thoroughly. "
        }
        button1={"Next"}
        image_main={HR_1}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("HR_2");
        }}
      />
    );
    else if (popUpSequence === "HR_2")
    return (
      <PopUpFrame2
        heading={"How to record Heart Rate & SpO2"}
        instruction={
          "Insert your finger into the device, ensuring it fits snugly with the sensor on the underside of the device. It’s recommended to use your index or middle finger. "
        }
        instruction2={
          "Make sure your finger is placed properly and the oximeter has a steady reading."
        }

        button1={"Next"}
        image_main={HR_2}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("HR_3");
        }}
      />
    );
    else if (popUpSequence === "HR_3")
    return (
      <PopUpFrame
        heading={"How to record Heart Rate & SpO2"}
        instruction={
          "Wait for a few seconds until the oximeter detects your pulse and displays your SpO2 level and pulse rate."
        }
        

        button1={"Start"}
        image_main={HR_3}
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("HR_FETCH");
          SensorRead((data)=>{

            setHrData(data);
             if(data.state==="end")
             {
              setPopupSequence("HR_Result")
             }
              console.log("hrData",hrData)
              }

              ,["send_message_hr","hr_data"],sendHrSensorValue
              );
        
        }}
      />
    );
    else if (popUpSequence === "HR_FETCH")
    return (
      <HR_Fetch
        setinitateTestPopUp={'wear device and press "start".'}
        data={hrData}
        onExitClick={props.onExitClick}
        onStopClick={() => {
            SensorStop("send_message_hr");
            setPopupSequence("HR_Result");
          }}
      />
    );  
    else if (popUpSequence === "HR_Result")
      return (
        <HRCircularBarResult  
        data={hrData}  
        onExitClick={props.onExitClick}
        onContinueClick={() => {
          setPopupSequence("BP_1");
        }}/>
      );
    else if (popUpSequence === "HR_Reading")
      return (
        <HrFinalReading  data={hrData}/>
      ); 
     
  


};


function AllTestTogetherPopUpPage() {
  const [user, setUser, removeUser] = useLocalStorageRef("user");
  const [initateTestPopUp, setinitateTestPopUp] = useState(true);
  const navigate = useNavigate();
  //   const location=useLocation();
  //    console.log(location);

  //    const data={
  //     name:location.state.name,
  //     email:location.state.email,
  //     password:location.state.password,
  //     phoneNumber:location.state.phoneNumber,
  //     gender:location.state.gender,
  //     dob:location.state.dob,

  // }

  return (
    <>
      {/* <Bp_Start_Pop_Up/> */}
      <div className="bpexisting-container">
        <div className="bpexisting-container1">
          {initateTestPopUp && (
            <AllTestTogetherPopUps
              userData={user}
              onExitClick={() => setinitateTestPopUp(false)}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default AllTestTogetherPopUpPage;
