import React from 'react'
import { Link,Navigate,useNavigate,useLocation } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import UpperBar from '../components/UpperBar'

const AllTests = (props) => {
  const [diagnosisPage,setDiagnosisPage]=useState("");
  const navigate = useNavigate();
  const location=useLocation();

  if(diagnosisPage==="Blood Pressure")
  {
    navigate("/bpexisting",{state:"userdata"});  //state: data
  }

if(diagnosisPage==="Heart Rate")
{
   navigate("/heartrateexisting",{state:"userData"});
}  
if(diagnosisPage==="Body Temperature")
{
   navigate("/bodytemperatureexisting",{state:"userData"});
}  
if(diagnosisPage==="Blood Glucose")
{
   navigate("/bloodglucoseexisting",{state:"userData"});
}  
if(diagnosisPage==="Digital Stethoscope")
{
   navigate("/videoconf");
}  
if(diagnosisPage==="ECG")
{
   navigate("/");
} 
if(diagnosisPage==="ENT")
{
   navigate("/videoconf");
} 








  return (
    <>
      <div className="all-tests-container">
        <UpperBar rootClassName="upper-bar-root-class-name3"></UpperBar>
        <div className="all-tests-container1">
          <button   type="button"
            onclick={()=>{}} className="all-tests-button button">
            <span>ECG</span>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-615n.svg"
              className="all-tests-pasted-image"
            />
          </button>
        </div>
        <div className="all-tests-container2">
          <button className="all-tests-button1 button" onClick={()=>{
            setDiagnosisPage("Blood Glucose")
          }}>
            <span>Blood Glucose</span>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-8fdr.svg"
              className="all-tests-pasted-image1"
            />
          </button>
        </div>
        <div className="all-tests-container3">
          <button className="all-tests-button2 button" onClick={()=>{
            setDiagnosisPage("Digital Stethoscope")
          }}>
            <span>Digital Stethoscope</span>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-gq36.svg"
              className="all-tests-pasted-image2"
            />
          </button>
        </div>
        <div className="all-tests-container4">
          <button className="all-tests-button3 button" onClick={()=>{
            setDiagnosisPage("Heart Rate")
          }}
          >
            <span>Heart Rate &amp; SpO2</span>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-ym6m.svg"
              className="all-tests-pasted-image3"
            />
          </button>
        </div>
        <div className="all-tests-container5">
          <button className="all-tests-button4 button" onClick={()=>{
            setDiagnosisPage("Blood Pressure")
          }}>
            <span>Blood Pressure</span>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-x14v.svg"
              className="all-tests-pasted-image4"
            />
          </button>
        </div>
        <div className="all-tests-container6">
          <button className="all-tests-button5 button" onClick={()=>{
            setDiagnosisPage("Body Temperature")
          }}>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-x14v.svg"
              className="all-tests-pasted-image5"
            />
            Body Temperature
          </button>
        </div>
        <div className="all-tests-container7">
          <button className="all-tests-button6 button" onClick={()=>{
            setDiagnosisPage("ENT")
          }}>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-ym6m.svg"
              className="all-tests-pasted-image6"
            />
            Otoscope (ENT)
          </button>
        </div>
        <Link to="/dashboard" className="all-tests-navlink">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-ypug.svg"
            className="all-tests-back"
          />
        </Link>
        <span className="all-tests-text5">All tests</span>
      </div>
      <style jsx>
        {`
          .all-tests-container {
            width: 1024px;
            height: 600px;
            display: flex;
            overflow: auto;
            align-items: center;
            justify-content: center;
            background-color: #f3f9ff;
          }
          .all-tests-container1 {
            top: 130px;
            flex: 0 0 auto;
            left: 71px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
          }
          .all-tests-button {
            top: 0px;
            left: 0px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            font-size: 24px;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            flex-direction: row;
            padding-bottom: 31;
            background-color: #ffffff;
          }
          .all-tests-pasted-image {
            top: 24px;
            left: 24px;
            right: 0px;
            width: 356px;
            bottom: 0px;
            height: 48px;
            position: absolute;
          }
          .all-tests-container2 {
            top: 242px;
            flex: 0 0 auto;
            left: 71px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .all-tests-button1 {
            width: 404px;
            height: 96px;
            display: flex;
            position: relative;
            font-size: 24px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            flex-direction: row;
            padding-bottom: 31;
            background-color: #ffffff;
          }
          .all-tests-pasted-image1 {
            top: 24px;
            left: 24px;
            right: 0px;
            width: 356px;
            bottom: 0px;
            height: 48px;
            position: absolute;
          }
          .all-tests-container3 {
            top: 354px;
            flex: 0 0 auto;
            left: 71px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .all-tests-button2 {
            width: 404px;
            height: 96px;
            display: flex;
            position: relative;
            font-size: 24px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            flex-direction: row;
            padding-bottom: 31;
            background-color: #ffffff;
          }
          .all-tests-pasted-image2 {
            top: 24px;
            left: 24px;
            width: 356px;
            height: 48px;
            position: absolute;
          }
          .all-tests-container4 {
            top: 466px;
            flex: 0 0 auto;
            left: 71px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .all-tests-button3 {
            width: 404px;
            height: 96px;
            display: flex;
            position: relative;
            font-size: 24px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            flex-direction: row;
            padding-bottom: 31;
            background-color: #ffffff;
          }
          .all-tests-pasted-image3 {
            top: 24px;
            left: 24px;
            width: 356px;
            height: 48px;
            position: absolute;
          }
          .all-tests-container5 {
            top: 130px;
            flex: 0 0 auto;
            left: 507px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .all-tests-button4 {
            width: 404px;
            height: 96px;
            display: flex;
            position: relative;
            font-size: 24px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            flex-direction: row;
            padding-bottom: 31;
            background-color: #ffffff;
          }
          .all-tests-pasted-image4 {
            top: 24px;
            left: 24px;
            width: 356px;
            bottom: 0px;
            height: 48px;
            position: absolute;
          }
          .all-tests-container6 {
            top: 242px;
            flex: 0 0 auto;
            left: 507px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .all-tests-button5 {
            width: 404px;
            height: 96px;
            font-size: 24px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            padding-bottom: 31px;
            background-color: #ffffff;
          }
          .all-tests-pasted-image5 {
            top: 24px;
            left: 24px;
            width: 356px;
            bottom: 0px;
            height: 48px;
            position: absolute;
          }
          .all-tests-container7 {
            top: 354px;
            flex: 0 0 auto;
            left: 507px;
            width: 404px;
            height: 96px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .all-tests-button6 {
            top: 0px;
            left: 0px;
            width: 404px;
            height: 96px;
            position: absolute;
            font-size: 24px;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 32px;
            border-width: 0px;
            padding-left: 88px;
            border-radius: 20px;
            padding-bottom: 31px;
            background-color: #ffffff;
          }
          .all-tests-pasted-image6 {
            top: 24px;
            left: 24px;
            width: 356px;
            height: 48px;
            position: absolute;
          }
          .all-tests-navlink {
            display: contents;
          }
          .all-tests-back {
            top: 64px;
            left: 32px;
            width: 24px;
            height: 24px;
            position: absolute;
            text-decoration: none;
          }
          .all-tests-text5 {
            top: 64px;
            left: 71px;
            color: rgb(38, 53, 64);
            height: auto;
            position: absolute;
            font-size: 20px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default AllTests
