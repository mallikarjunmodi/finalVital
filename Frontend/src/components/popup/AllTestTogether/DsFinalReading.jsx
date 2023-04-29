import React from 'react'

import Header from './header'

const DsFinalReading = (props) => {
  return (
    <>
      <div className="stethescopeinput-container">
        <div className="stethescopeinput-container1">
          <Header rootClassName="header-root-class-name21"></Header>
          <span className="stethescopeinput-text">Check again</span>
          <span className="stethescopeinput-text01">
            Your reading is normal.
          </span>
          <span className="stethescopeinput-text02">
            Point 02 of the inference from the report.
          </span>
          <span className="stethescopeinput-text03">Pulse</span>
          <span className="stethescopeinput-text04">Diastolic</span>
          <span className="stethescopeinput-text05">/min</span>
          <span className="stethescopeinput-text06">mm Hg</span>
          <span className="stethescopeinput-text07">mm Hg</span>
          <span className="stethescopeinput-text08">
            <span>69</span>
            <br></br>
          </span>
          <span className="stethescopeinput-text11">
            <span>80</span>
            <br></br>
          </span>
          <span className="stethescopeinput-text14">
            <span>120</span>
            <br></br>
          </span>
          <span className="stethescopeinput-text17">Systolic</span>
          <img
            src="/playground_assets/rectangle-300h.png"
            alt="image"
            className="stethescopeinput-image"
          />
          <button className="stethescopeinput-button button"></button>
          <img
            alt="image"
            src="/playground_assets/group%2031.svg"
            className="stethescopeinput-image1"
          />
          <button className="stethescopeinput-button1 button">
            Send results
          </button>
          <button className="stethescopeinput-button2 button">
                  Contact doctor
          </button>
          <img
            src="/playground_assets/group%20181-1500h.png"
            alt="image"
            className="stethescopeinput-image2"
          />
          <img
            src="/playground_assets/group%20181-1500h.png"
            alt="image"
            className="stethescopeinput-image3"
          />
          <img
            src="/playground_assets/group%20174-200h.png"
            alt="image"
            className="stethescopeinput-image4"
          />
          <img
            src="/playground_assets/ellipse%20152-200h.png"
            alt="image"
            className="stethescopeinput-image5"
          />
        </div>
      </div>
      <style jsx>
        {`
          .stethescopeinput-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .stethescopeinput-container1 {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 1024px;
            bottom: 0px;
            height: 600px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .stethescopeinput-text {
            top: 353px;
            left: 674px;
            color: #125873;
            height: 19px;
            position: absolute;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text01 {
            top: 244px;
            left: 638px;
            color: #1ab58f;
            bottom: bottom;
            position: absolute;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text02 {
            top: 486px;
            left: 358px;
            color: rgb(114, 114, 114);
            position: absolute;
            font-size: 14px;
          }
          .stethescopeinput-text03 {
            top: 241px;
            left: 406px;
            color: rgb(114, 114, 114);
            bottom: bottom;
            position: absolute;
            font-size: 14px;
          }
          .stethescopeinput-text04 {
            top: 241px;
            left: 286px;
            color: rgb(114, 114, 114);
            bottom: bottom;
            position: absolute;
            font-size: 14px;
          }
          .stethescopeinput-text05 {
            top: 331px;
            left: 406px;
            color: rgb(26, 181, 143);
            position: absolute;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text06 {
            top: 341px;
            left: 286px;
            color: #1ab58f;
            position: absolute;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text07 {
            top: 341px;
            left: 150px;
            color: #1ab58f;
            position: absolute;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text08 {
            top: 284px;
            left: 402px;
            color: rgb(26, 181, 143);
            width: 45px;
            height: 49px;
            position: absolute;
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text11 {
            top: 268px;
            left: 282px;
            color: rgb(26, 181, 143);
            width: 100px;
            height: 82px;
            position: absolute;
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text14 {
            top: 268px;
            left: 146px;
            color: #1ab58f;
            width: 100px;
            height: 82px;
            position: absolute;
            font-size: 60px;
            font-style: normal;
            font-weight: 600;
          }
          .stethescopeinput-text17 {
            top: 241px;
            left: 150px;
            color: #727272;
            bottom: bottom;
            position: absolute;
            font-size: 14px;
          }
          .stethescopeinput-image {
            top: 196px;
            left: 99px;
            right: right;
            width: 809px;
            bottom: bottom;
            height: 209px;
            position: absolute;
            object-fit: cover;
          }
          .stethescopeinput-button {
            top: 68px;
            left: 41px;
            color: #1ab58f;
            width: 43.44px;
            height: 43.44px;
            position: absolute;
            font-size: 16px;
            box-shadow: 0px 10px 20px 0px rgba(36, 99, 14, 0.17);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 2.5;
            border-width: 0px;
            border-radius: 5px;
            background-color: #ffffff;
          }
          .stethescopeinput-image1 {
            top: 80.78px;
            left: 53.78px;
            width: 18.75px;
            height: 17.89px;
            position: absolute;
            object-fit: cover;
          }
          .stethescopeinput-button1 {
            top: 283px;
            left: 717px;
            color: #1ab58f;
            width: 156px;
            height: 36px;
            position: absolute;
            font-size: 14px;
            box-shadow: rgba(18, 88, 115, 0.16) 0px 10px 20px 0px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 1.5;
            border-color: #1ab58f;
            border-width: 0.5px;
            border-radius: 10px;
            background-color: #ffffff;
          }
          .stethescopeinput-button2 {
            top: 283px;
            left: 553px;
            color: rgb(255, 255, 255);
            width: 156px;
            height: 36px;
            position: absolute;
            font-size: 14px;
            box-shadow: rgba(18, 88, 115, 0.16) 0px 10px 20px 0px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 1.5;
            border-width: 0px;
            border-radius: 10px;
            background-color: rgb(26, 181, 143);
          }
          .stethescopeinput-image2 {
            top: 292.5px;
            left: 729px;
            width: 15.82px;
            height: 15.82px;
            position: absolute;
            object-fit: cover;
          }
          .stethescopeinput-image3 {
            top: 292.5px;
            left: 568.5px;
            width: 15.82px;
            height: 15.82px;
            position: absolute;
            object-fit: cover;
          }
          .stethescopeinput-image4 {
            top: 349px;
            left: 646px;
            right: right;
            width: 24px;
            height: 24px;
            position: absolute;
            object-fit: cover;
          }
          .stethescopeinput-image5 {
            top: 491px;
            left: 342px;
            width: 8px;
            bottom: 41px;
            height: 8px;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default DsFinalReading