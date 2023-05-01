import { Link,useNavigate } from 'react-router-dom'
import { useState, useEffect,React } from 'react';

import UpperBar from '../components/UpperBar'
import LastReadingsNew from '../components/LastReadingsNew'
import axios from 'axios';
import api from '../api';
import { dashboardFetchSensorValue } from '../url/url';


const Home = (props) => {

  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    api.get(dashboardFetchSensorValue)
      .then(response => setSensorData(response.data))
      .catch(error => console.log(error));
  }, []);




  return (
    <>
      <div className="home-container">
        <div className="home-main-body">
          <div className="home-group1132">
            <span className="home-text">
              <span>Your preferred doctor</span>
            </span>
            <span className="home-text02">
              <span>Dr. Rajesh Pillai</span>
            </span>
            <span className="home-text04">
              <span>Devanahalli , Bangalore</span>
            </span>
          </div>
          <div className="home-group19">
            <span className="home-text06">Ravinder Singh</span>
            <span className="home-text07">
              <span>36 y</span>
            </span>
            <span className="home-text09">
              <span>+91 7657 972 724</span>
            </span>
            <img
              alt="Vector13942168"
              src="/playground_assets/vector13942168-c4no.svg"
              className="home-vector1394"
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/pexels-ketut-subiyanto-4307884%201-200h.png"
            className="home-image"
          />
          <Link to="/videoconf" className="home-navlink button">
            Connect with Doctor
          </Link>
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-fpr5.svg"
            className="home-pasted-image"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-jx1t.svg"
            className="home-pasted-image01"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-970mnk.svg"
            className="home-pasted-image02"
          />
        </div>
        <div className="home-settings-bar">
          <img
            src="/playground_assets/pexels-ketut-subiyanto-4307884%201-200h.png"
            className="home-image1"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-6y2h.svg"
            className="home-pasted-image03"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-q3dg.svg"
            className="home-pasted-image04"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-ynj8.svg"
            className="home-pasted-image05"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-qz2s.svg"
            className="home-pasted-image06"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-iysi.svg"
            className="home-pasted-image07"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-wlme.svg"
            className="home-pasted-image08"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-3q49.svg"
            className="home-pasted-image09"
          />
        </div>
        <UpperBar rootClassName="upper-bar-root-class-name"></UpperBar>
        <LastReadingsNew rootClassName="last-readings-root-class-name"></LastReadingsNew>
        <img
          alt="pastedImage"
          src="/playground_assets/pastedimage-ndr.svg"
          className="home-pasted-image10"
        />
        <div className="home-container1">
          <Link to="/AllTestTogether" className="home-navlink1 button">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-4kwl.svg"
              className="home-pasted-image11"
            />
          </Link>
          <Link to="/allTests" className="home-all-vitals button">
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-nsu.svg"
              className="home-pasted-image12"
            />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 1024px;
            height: 600px;
            display: flex;
            overflow: auto;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f3f9ff;
          }
          .home-main-body {
            top: 132px;
            flex: 0 0 auto;
            left: 32px;
            width: 664px;
            height: 222px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: 10px;
            background-color: #ffffff;
          }
          .home-group1132 {
            top: 122px;
            left: 93px;
            width: 275px;
            height: 74px;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .home-text {
            color: rgba(43, 43, 43, 1);
            width: 256px;
            height: auto;
            opacity: 0.5;
            position: absolute;
            font-size: 16px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Manrope;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text02 {
            top: 26px;
            color: rgba(43, 43, 43, 1);
            width: 191px;
            height: auto;
            position: absolute;
            font-size: 16px;
            align-self: auto;
            font-style: Bold;
            text-align: left;
            font-family: Manrope;
            font-weight: 700;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text04 {
            top: 52px;
            color: rgba(43, 43, 43, 1);
            width: 275px;
            height: auto;
            position: absolute;
            font-size: 16px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Manrope;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-group19 {
            top: 24px;
            left: 96px;
            width: 175px;
            height: 59px;
            display: flex;
            padding: 0;
            position: absolute;
            align-self: auto;
            box-sizing: border-box;
            align-items: flex-start;
            flex-shrink: 1;
            border-color: transparent;
            border-style: none;
            border-width: 0;
            border-radius: 0px 0px 0px 0px;
            flex-direction: row;
            justify-content: flex-start;
            background-color: transparent;
          }
          .home-text06 {
            color: rgb(43, 43, 43);
            height: auto;
            position: absolute;
            font-size: 24px;
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text07 {
            top: 37px;
            color: rgba(43, 43, 43, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Manrope;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-text09 {
            top: 37px;
            left: 51px;
            color: rgba(43, 43, 43, 1);
            height: auto;
            position: absolute;
            font-size: 16px;
            align-self: auto;
            font-style: Regular;
            text-align: left;
            font-family: Manrope;
            font-weight: 400;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .home-vector1394 {
            top: 40px;
            left: 40px;
            width: 0px;
            height: 16px;
            position: absolute;
          }
          .home-image {
            top: 24px;
            left: 24px;
            width: 56px;
            height: 56px;
            position: absolute;
            object-fit: cover;
            border-radius: 50px;
          }
          .home-navlink {
            top: 141px;
            left: 401px;
            color: rgb(255, 255, 255);
            width: 224px;
            height: 61px;
            display: flex;
            position: absolute;
            font-size: 18px;
            font-style: normal;
            text-align: center;
            align-items: center;
            font-family: Manrope;
            font-weight: 600;
            padding-top: 0px;
            border-width: 0px;
            padding-left: 0px;
            border-radius: 10px;
            padding-right: 0px;
            padding-bottom: 0px;
            justify-content: center;
            text-decoration: none;
            background-color: rgb(75, 161, 83);
          }
          .home-pasted-image {
            top: 104px;
            left: 93px;
            width: 544px;
            height: 1px;
            position: absolute;
          }
          .home-pasted-image01 {
            top: 24px;
            left: 608px;
            width: 32px;
            height: 32px;
            position: absolute;
          }
          .home-pasted-image02 {
            top: 64px;
            left: 136px;
            width: 2px;
            height: 16px;
            position: absolute;
          }
          .home-settings-bar {
            top: 52px;
            flex: 0 0 auto;
            left: 501px;
            width: 493px;
            height: 64px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: 10px;
            background-color: var(--dl-color-gray-white);
          }
          .home-image1 {
            top: 12px;
            left: 408px;
            width: 40px;
            height: 40px;
            position: absolute;
            object-fit: cover;
            border-radius: 50px;
          }
          .home-pasted-image03 {
            top: 20px;
            left: 456px;
            width: 24px;
            height: 24px;
            position: absolute;
          }
          .home-pasted-image04 {
            top: 8px;
            left: 16px;
            width: 48px;
            height: 48px;
            position: absolute;
          }
          .home-pasted-image05 {
            top: 8px;
            left: 80px;
            width: 48px;
            height: 48px;
            position: absolute;
          }
          .home-pasted-image06 {
            top: 8px;
            left: 144px;
            width: 48px;
            height: 48px;
            position: absolute;
          }
          .home-pasted-image07 {
            top: 8px;
            left: 208px;
            width: 48px;
            height: 48px;
            position: absolute;
          }
          .home-pasted-image08 {
            top: 8px;
            left: 272px;
            width: 48px;
            height: 48px;
            position: absolute;
          }
          .home-pasted-image09 {
            top: 8px;
            left: 336px;
            width: 48px;
            height: 48px;
            position: absolute;
          }
          .home-pasted-image10 {
            top: 57px;
            left: 32px;
            width: 87px;
            height: 32px;
            position: absolute;
          }
          .home-container1 {
            top: 132px;
            flex: 0 0 auto;
            left: 712px;
            width: 292px;
            height: 222px;
            display: flex;
            position: absolute;
            align-items: flex-start;
          }
          .home-navlink1 {
            color: rgb(255, 255, 255);
            width: 292px;
            height: 141px;
            display: flex;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            font-style: normal;
            font-family: Manrope;
            font-weight: 600;
            border-width: 0px;
            border-radius: 16px;
            flex-direction: row;
            text-decoration: none;
            background-color: rgb(40, 91, 244);
          }
          .home-pasted-image11 {
            top: 24px;
            left: 24px;
            width: 236px;
            height: 91px;
            position: absolute;
          }
          .home-all-vitals {
            color: rgb(255, 255, 255);
            right: 0px;
            width: 292px;
            bottom: 0px;
            height: 65px;
            position: absolute;
            box-shadow: rgb(212, 212, 212) 5px 5px 10px 0px;
            font-family: Manrope;
            border-width: 0px;
            border-radius: 16px;
            text-decoration: none;
            background-color: rgb(255, 255, 255);
          }
          .home-pasted-image12 {
            right: 33px;
            width: 238px;
            bottom: 12px;
            height: 40px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Home
