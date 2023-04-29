import React from 'react'
import volume from "../assets/volume.svg"
import PropTypes from 'prop-types'

const DigitalStethescope = (props) => {
  return (
    <>
      <div className="stethescope-container">
        <span className="stethescope-text">{props.heading}</span>
        <span className="stethescope-text1">{props.instruction}</span>
        <button className="stethescope-button button">Back</button>
        <button className="stethescope-button1 button">{props.button1}</button>
       
        <button className="stethescope-button2 button">{props.button3}</button>
        <button className="stethescope-button3 button">
        <img
          alt={"volume"}
          src={volume}
          className="stethescope-image1"
        />
        </button>
        <img
          src={props.image_main}
          alt={"image"}
          className="stethescope-image"
        />
        
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="stethescope-image2"
        />
        <img
          alt={props.image_alt3}
          src={props.image_src3}
          className="stethescope-image3"
        />
      </div>
      <style jsx>
        {`
          .stethescope-container {
            width: 942.88px;
            height: 428px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
            background-color: #ffffff;
          }
          .stethescope-text {
            top: 47px;
            left: 44px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
          }
          .stethescope-text1 {
            top: 149px;
            left: 44px;
            width: 380px;
            position: absolute;
            font-size: 20px;
          }
          .stethescope-button {
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
          .stethescope-button1 {
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
          .stethescope-image {
            top: 152px;
            left: 530px;
            width: 320px;
            height: 75px;
            position: absolute;
            object-fit: cover;
          }
          .stethescope-button2 {
            top: 16px;
            left: 846px;
            color: #285bf4;
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
            background-color: transparent;
          }
          .stethescope-button3 {
            top: 38px;
            left: 353px;
            position: absolute;
            color: #1ab58f;
            width: 43.44px;
            height: 43.44px;
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
            display: flex;
            justify-content: center;
            align-items: center; 
            {/* top: 38px;
            left: 191px;
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
            display: flex;
            justify-content: center;
            align-items: center; */}
          }
          .stethescope-image1 {
    
            width: 32.44px;
            height: 32.44px;
            display:flex;
            justify-content: center;
            align-items: center;
           
          }
          .stethescope-image2 {
            top: 310px;
            left: 687px;
            width: 9px;
            height: 9px;
            position: absolute;
            object-fit: cover;
          }
          .stethescope-image3 {
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

// Stethescope.defaultProps = {
//   heading: 'Instructions',
//   instruction:
//     'Set to the appropriate mode, such as heart, lung, or bowel sounds and click on start.',
//   button2: 'Back',
//   button1: 'Next',
//   image_src: '/playground_assets/group%2010911-200h.png',
//   image_alt: 'image',
//   button3: 'Skip',
//   button: '',
//   image_alt1: 'image',
//   image_src1: '/playground_assets/group%2031.svg',
//   image_src2: '/playground_assets/ellipse%20149-200h.png',
//   image_alt2: 'image',
//   image_src3: '/playground_assets/ellipse%20150-200h.png',
//   image_alt3: 'image',
// }

// Stethescope.propTypes = {
//   heading: PropTypes.string,
//   instruction: PropTypes.string,
//   button2: PropTypes.string,
//   button1: PropTypes.string,
//   image_src: PropTypes.string,
//   image_alt: PropTypes.string,
//   button3: PropTypes.string,
//   button: PropTypes.string,
//   image_alt1: PropTypes.string,
//   image_src1: PropTypes.string,
//   image_src2: PropTypes.string,
//   image_alt2: PropTypes.string,
//   image_src3: PropTypes.string,
//   image_alt3: PropTypes.string,
// }

export default DigitalStethescope