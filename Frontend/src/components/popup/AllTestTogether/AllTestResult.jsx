import React from 'react'
import ai from '../assets/ai.svg';
import Header from '../../HeaderBar';
import volume from "../assets/volume.svg"
import share from "../assets/shareAllTest.svg"
const AllTestResult = (props) => {
  return (
    <>
      <div className="stethescopeinput-container">
        <div className="stethescopeinput-container1">
        <p className='heading'>Tests successfully taken!</p>
        <img
            src={share}
            alt="share"
            className="share-image"
          />
        <span className="all-test-share-text">Share results</span>

          <Header rootClassName="header-root-class-name21"></Header>
          
          <div className="all-test-green-back"></div>
          <div className='diagnosis'></div>
          <img src={ai} alt='AI' className='ai'></img>
          <div className='diagnosis-heading'>AI Diagnosis</div>
          <p className='diagnosis-text'>AI diagnosis on this reading will be shown here for the user. If everything is good, it will say so.</p>
        

         <div className='readings'>
          
          <span className="stethescopeinput-text04" id='reading1'>Heart Rate</span>
          
          <span className="stethescopeinput-text06" id='reading3'>BPM</span>
          <span className="stethescopeinput-text07" id='reading3'>%</span>



          <span className="all-test-sys-header" id='reading1'>BP-Systolic</span>
          <span className="all-test-sys-value"  id='reading2'>{props.bpdata.sys}</span>
          <span className="all-test-sys-symbol" id='reading3'>mm Hg</span>

          <span className="all-test-dia-header" id='reading1'>BP-Diastolic</span>
          <span className="all-test-dia-value"  id='reading2' >{props.bpdata.dia}</span>
          <span className="all-test-dia-symbol" id='reading3'>mm Hg</span>

          <span className="all-test-bt-header" id='reading1'>Body Temperature</span>
          <span className="all-test-bt-value"  id='reading2' >{props.btdata}</span>
          <span className="all-test-bt-symbol" id='reading3'>℉</span>
          {/* <span className="all-test-share-text">Share results</span> */}
          <span className="stethescopeinput-text11" id='reading2'>
            <span>{props.hrdata.hr}</span>
            <br></br>
          </span>
          <span className="stethescopeinput-text14" id='reading2'>
            <span>{props.hrdata.spo2}</span>
            <br></br>
          </span>
          <span className="stethescopeinput-text17" id='reading1'>SpO2</span>
          </div>
          {/* <img
            src={share}
            alt="share"
            className="share-image"
          /> */}
          <button className="stethescopeinput-button button">
          <img
            alt="volume"
            src={volume}
            className="stethescopeinput-image1"
          />
          </button>

          <button className="all-test-button-done"
         onClick={props.onContinueClick}>
         </button>
           <span className="all-test-text-done"> Done</span>

           <button className="check-again"
         onClick={props.onContinueClick}>
         </button>
           <span className="check-again-text"> Check again</span>

        </div>
      </div>
      <style jsx>
        {`
        .all-test-text-done
        {
            position: absolute;
            width: 181.57px;
            height: 24px;
            left: 536px;
            top: 508px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            text-align: center;

            color: #FFFFFF;
        }
        .check-again-text
        {
            position: absolute;
            width: 181.57px;
            height: 24px;
            left: 278px;
            top: 508px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            color: #285BF4;
        }
        .check-again
        { 
            position: absolute;
            width: 240px;
            height: 54px;
            left: 250px;
            top: 493px;
            background: #FFFFFF;
            border: solid 1px #285BF4;
            box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
            border-radius: 10px;

        }

        .heading{
          color: #125873;
          font-weight: 700;
          font-size: 24px;
          line-height: 22px;
          top: 5.5rem;
          left: 37%;
          position: absolute;

        }

        #reading1{
          position: absolute;
          top: 12rem;
        }
        #reading2{
          position: absolute;
          top: 14rem;
        }
        #reading3{
          position: absolute;
          top: 18.5rem;
        }

        .all-test-button-done
        { 
            position: absolute;
            width: 240px;
            height: 54px;
            left: 510px;
            top: 493px;
            background: #285BF4;
            border:none;
                box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
                border-radius: 10px;

        }
        .share-image
        {
            position: absolute;
            right: 13rem;
            top: 5.5rem;
        }
        .all-test-share-text
        {
        position: absolute;
        width: 153px;
        height: 33px;
        right: 2.8rem;
        top: 5.2rem;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 33px;
        color: #285BF4;
          }
         .all-test-green-back{
            position: absolute;
            width: 809px;
            height: 322px;
            left: 114px;
            top: 131px;

            background: #1AB58F;
            opacity: 0.05;
            border-radius: 10px;
         }

         .diagnosis{
          position: absolute;
            width: 793px;
            height: 108px;
            left: 122px;
            top: 21rem;
            background: #1AB58F;
            border-radius: 10px;
            opacity: 0.3;
         }

         .ai{
          position: absolute;
          top: 22rem;
          left: 136px;
         }

         .diagnosis-heading{
          color: #125873;
          position: absolute;
          top: 22.1rem;
          left: 168px;
          font-weight: bold;
          font-size: 14px;
          // font-family: primary;
         }

        .diagnosis-text{
          position: absolute;
          top: 24rem;
          left: 138px;
          color: #348672;
          font-size: 16px;
        }
        
        .all-test-bt-value{
            position: absolute;
            width: 74px;
            height: 82px;
            left: 720px;
            top: 260px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 60px;
            line-height: 82px;
            /* identical to box height */
            color: #1AB58F;
        }
        .all-test-bt-header{
            position: absolute;
            width: 119px;
            height: 19px;
            left: 720px;
            top: 240px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;

            color: #727272;
        }
        .all-test-bt-symbol{
            position: absolute;
            width: 15px;
            height: 19px;
            left: 720px;
            top: 340px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;

            color: #1AB58F;
        }
        .all-test-dia-symbol{
            position: absolute;
            width: 46px;
            height: 19px;
            left: 560px;
            top: 340px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;

            color: #1AB58F;
        }
        .all-test-dia-value{
            position: absolute;
            width: 75px;
            height: 82px;
            left: 560px;
            top: 260px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 60px;
            line-height: 82px;
            /* identical to box height */


            color: #1AB58F;
        }
        .all-test-dia-header{
            position: absolute;
            width: 79px;
            height: 19px;
            left: 560px;
            top: 240px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #727272
        }
         .all-test-sys-symbol{
            position: absolute;
            width: 46px;
            height: 19px;
            left: 410px;
            top: 340px;
            
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;

            color: #1AB58F;
         }
         .all-test-sys-value{
            position: absolute;
            width: 100px;
            height: 82px;
            left: 410px;
            top: 260px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 60px;
            line-height: 82px;
            /* identical to box height */


            color: #1AB58F;
         }
         .all-test-sys-header{
            position: absolute;
            width: 77px;
            height: 19px;
            left: 420px;
            top: 240px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;

            color: #727272;
         }
          .hr-body-text{
            position: absolute;
            width: 513px;
            height: 33px;
            left: 251px;
            top: 158px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 33px;
            /* identical to box height */

            text-align: center;

            color: #125873;
          }
          .hr-header-text{
            position: absolute;
            width: 281px;
            height: 33px;
            left: 367px;
            top: 109px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 33px;
            /* identical to box height */

            text-align: center;

            color: #1AB58F;
          }
          .stethescopeinput-text-continue{
            position: absolute;
            width: 181.57px;
            height: 24px;
            left: 545.09px;
            top: 508px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            line-height: 22px;
            text-align: center;

            color: #FFFFFF;
          }
          .stethescopeinput-text-stop{
            position: absolute;
            width: 114px;
            height: 22px;
            left: 329px;
            top: 509px;

            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            /* identical to box height */

            text-align: center;

            color: #1AB58F;
          }
          .stethescopeinput-button-continue
          {
            box-sizing: border-box;
            position: absolute;
            width: 240px;
            height: 54px;
            left: 519px;
            top: 493px;
            border:none;
            background: #1AB58F;
            box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
            border-radius: 10px;
          }
          .stethescopeinput-button-stop
          {
            box-sizing: border-box;
            position: absolute;
            width: 241.93px;
            height: 54px;
            left: 265px;
            top: 493px;

            background: #FFFFFF;
            border: 1px solid #1AB58F;
            box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
            border-radius: 10px;
          }
        
          .stethescopeinput-left-green{
            position: absolute;
            width: 809px;
            height: 209px;
            left: 99px;
            top: 196px;

            background: #1AB58F;
            opacity: 0.05;
            border-radius: 10px;
          }
          .stethescopeinput-left-red{
            position: absolute;
            width: 809px;
            height: 209px;
            left: 99px;
            top: 196px;

            background: #DA5555;
            opacity: 0.05;
            border-radius: 10px;
            }
          .stethescopeinput-right-green{
            position: absolute;
            width: 389px;
            height: 209px;
            left: 519px;
            top: 196px;

            background: #1AB58F;
            opacity: 0.1;
            border-radius: 0px 10px 10px 0px;
          }
          .stethescopeinput-right-red{
            position: absolute;
            width: 441px;
            height: 209px;
            left: 467px;
            top: 196px;

            background: #FFE0E0;
            border-radius: 0px 10px 10px 0px;
            }
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
            position: absolute;
            width: 151px;
                height: 19px;
                left: 638px;
                top: 244px;

                font-family: 'Manrope';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 19px;
                text-align: center;

                color: #1AB58F;
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
            display:flex;
            justify-content: center;
            align-items: center;

          }
          .stethescopeinput-image1 {
           
            width: 32.75px;
            height: 32.89px;
            
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

export default  AllTestResult;