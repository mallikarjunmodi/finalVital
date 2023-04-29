import React from 'react'
import volume from "../assets/volume.svg"
import PropTypes from 'prop-types'
import BP_1 from "../assets/BP_1.png"
const BTPopUpFrame = (props) => {
  return (
    <>
      <div className="-pinstruction-container">
        <span className="-pinstruction-text">{props.heading}</span>
        <span className="-pinstruction-text1">{props.instruction}</span>
        <span className="-btinstruction-text2">{props.instruction2}</span>

        <button className="-pinstruction-button button"> 
         <img
          src={volume}
          alt={props.image_alt1}
          className="-pinstruction-image1"
        />
        </button>
        <button className="-pinstruction-button1 button">
          Back
        </button>
        <button className="-pinstruction-button2 button" onClick={props.onContinueClick }>
        
          {props.button1}
        </button>
        <img
          src={props.image_main}
          alt={props.image_alt}
          className="-pinstruction-image"
        />
       <div>
      
       </div>

        <button className="-pinstruction-button3 button">
          Skip
        </button>
        {/* <img
          src={props.image_src2}
          alt={props.image_alt2}
          className="-pinstruction-image2"
        /> */}
        {/* <img
          src={props.image_src3}
          alt={props.image_alt3}
          className="-pinstruction-image3"
        /> */}
      </div>
      <style jsx>
        {`
          .-pinstruction-container {
            width: 942.88px;
            height: 428px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .-pinstruction-text {
            top: 47px;
            left: 44px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .-pinstruction-text1 {
            top: 104px;
            left: 44px;
            right: 520px;
            bottom: 0px;
            position: absolute;
            font-size: 20px;
          }
          .-btinstruction-text2 {
            position: absolute;
            width: 380px;
            height: 54px;
            left: 44px;
            top: 261px;
            font-family: 'Manrope';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;

            color: #393939;

            opacity: 0.5;

          }
          
          .-pinstruction-button {
            top: 38px;
            left: 353px;
            color: #1ab58f;
            width: 43.44px;
            height: 43.44px;
            position: absolute;
            font-size: 16px;
            box-shadow: 0px 10px 20px 0px rgba(36, 99, 14, 0.17);
            margin-left:18px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 2.5;
            border-width: 0px;
            border-radius: 5px;
            background-color: #ffffff;
          }
          .-pinstruction-button1 {
            top: 342px;
            left: 304px;
            color: #1ab58f;
            width: 160px;
            bottom: 36px;
            height: 54px;
            position: absolute;
            font-size: 16px;
            box-shadow: 0px 10px 20px 0px rgba(36, 99, 14, 0.17);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 2.5;
            border-width: 0px;
            border-radius: 10px;
            background-color: #ffffff;
          }
          .-pinstruction-button2 {
            top: 342px;
            left: 479px;
            color: #ffffff;
            width: 160px;
            bottom: 36px;
            height: 54px;
            position: absolute;
            font-size: 16px;
            box-shadow: 0px 10px 20px 0px rgba(36, 99, 14, 0.17);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 2.5;
            border-width: 0px;
            border-radius: 10px;
            background-color: #1ab58f;
          }
          .-pinstruction-image {
            
            position: absolute;
            width: 241px;
            height: 264px;
            left: 601px;
            top: 70px;
          }
          .-pinstruction-image1 {
            
            width: 28.75px;
            height: 28.89px;
            display:flex;
            margin-left:8px;
            justify-content: center;
            align-items: center;
          }
          .-pinstruction-button3 {
            top: 16px;
            left: 846px;
            color: #285bf4;
            background-color:white;
            right: 0px;
            width: 80px;
            height: 40;
            position: absolute;
            font-size: 16px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            line-height: 1.8;
            border-width: 0px;
          }
          .-pinstruction-image2 {
            top: 310px;
            left: 687px;
            width: 9px;
            height: 9px;
            position: absolute;
            object-fit: cover;
          }
          .-pinstruction-image3 {
            top: 310px;
            left: 700px;
            width: 9px;
            height: 9px;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

// BPinstruction.defaultProps = {
//   heading: 'How to record Blood Pressure',
//   instruction:
//     'Sit down in a quiet, comfortable place.  Make sure your feet are flat on the ground and your arm is supported at heart level.',
//   button: '',
//   stop_button: 'Stop',
//   button1: 'Next',
//   image_src: '/playground_assets/group%201080-300h.png',
//   image_alt: 'image',
//   button2: 'Back',
//   image_src1: '/playground_assets/group%2031.svg',
//   image_alt1: 'image',
//   button3: 'Skip',
//   image_src2: '/playground_assets/ellipse%20149-200h.png',
//   image_alt2: 'image',
//   image_src3: '/playground_assets/ellipse%20150-200h.png',
//   image_alt3: 'image',
// }

// BPinstruction.propTypes = {
//   heading: PropTypes.string,
//   instruction: PropTypes.string,
//   button: PropTypes.string,
//   stop_button: PropTypes.string,
//   button1: PropTypes.string,
//   image_src: PropTypes.string,
//   image_alt: PropTypes.string,
//   button2: PropTypes.string,
//   image_src1: PropTypes.string,
//   image_alt1: PropTypes.string,
//   button3: PropTypes.string,
//   image_src2: PropTypes.string,
//   image_alt2: PropTypes.string,
//   image_src3: PropTypes.string,
//   image_alt3: PropTypes.string,
// }

export default BTPopUpFrame 