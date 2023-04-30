import React from 'react'
import volume from "../assets/volume.svg"
import Header from '../../HeaderBar'
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';

const CircularBarResult = (props) => {
  return (
    <>
      <div className="stethescopeinput-container">
        <div className="stethescopeinput-container1">
          <Header rootClassName="header-root-class-name21"></Header>
           
           <div className='circular-progressbar-3'>
           </div>
          <div className='circular-progressbar-2'>
          </div>
          <div className='circular-progressbar-1'>
          </div>
            <span className='circular-progressbar-text'>Listening</span>
          

         
         
          
         
          <button className="stethescopeinput-button button">
          <img
            alt="image"
            src={volume}
            className="stethescopeinput-image1"
          />
          </button>
         
          <button className="ds-circular-progressbar-stop-button" onClick={props.onStopClick }>
            <span className="ds-circular-progressbar-stop-button-text" 
            >Stop </span> 
          </button>
         


        </div>
      </div>
      <style jsx>
        {`
        .ds-circular-progressbar-stop-button-text{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-align: center;

            color: #FFFFFF;
        }
        .circular-progressbar-result-button{
            position: absolute;
                width: 240px;
                height: 54px;
                left: 519px;
                top: 493px;
                
                font-family: 'Manrope';
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 22px;
                text-align: center;

                color: #FFFFFF;
                border:none;
                background: #1AB58F;
                box-shadow: 0px 10px 20px rgba(11, 68, 90, 0.16);
                border-radius: 10px;
        }
          .ds-circular-progressbar-stop-button
          {
            background-color:rgba(218, 85, 85, 1);
            position: absolute;
            width: 160px;
            height: 54px;
            left: 422.23px;
            top: 489px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 22px;
            text-align: center;
            border:none;
            color: #FFFFFF
            background-colour: rgba(218, 85, 85, 1)
            box-shadow: 0px 10px 20px rgba(36, 99, 14, 0.16);
            border-radius: 10px;
          }
         .circular-progressbar-text-sign{
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            text-align: center;

            color: #263540;
         } 
        .circular-progressbar-text
        {
            position: absolute;
            width: 142px;
            height: 44px;
            left: 431px;
            top: 259px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 600;
            font-size: 32px;
            line-height: 44px;
            /* identical to box height */

            display: flex;
            align-items: center;
            text-align: center;

            color: #1AB58F;
         }
         .circular-progressbar-3{
          
            box-sizing: border-box;

            position: absolute;
            width: 335px;
            height: 334px;
            left: 335px;
            top: 119px;

            border-radius:170px;
            opacity: 0.1;
            border: 1px solid #47C3A4;
         }
         .circular-progressbar-2{
            box-sizing: border-box;
            position: absolute;
            width: 295px;
            height: 294px;
            left: 355px;
            top: 139px;
            border-radius:148px;
            opacity: 0.4;
            
            border: 1px solid #1AB58F;
         }
        .circular-progressbar-1
        {
            box-sizing: border-box;

            position: absolute;
            width: 257.68px;
            height: 257.68px;
            left: 373.89px;
            top: 157.21px;
            border-radius:175px;
            border: 3px solid #1AB58F;
            display: flex;
            padding:54px;
            align-items: center;
            text-align: center;

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


        `}
      </style>
    </>
  )
}

export default CircularBarResult