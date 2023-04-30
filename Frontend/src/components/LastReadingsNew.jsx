import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

const LastReadingsNew = (props) => {
  return (
    <>
      <div className={`last-readings-container ${props.rootClassName} `}>
        <span className="last-readings-text">{props.text215}</span>
        <span className="last-readings-text01">{props.text2151}</span>
        <span className="last-readings-text02">{props.text214}</span>
        <span className="last-readings-text03">{props.text213}</span>
        <span className="last-readings-text04">{props.text212}</span>
        <span className="last-readings-text05">160+</span>
        <span className="last-readings-text06">{props.text211}</span>
        <span className="last-readings-text07">{props.text2}</span>
        <span className="last-readings-text08">{props.text24}</span>
        <span className="last-readings-text09">{props.text23}</span>
        <span className="last-readings-text10">{props.text22}</span>
        <span className="last-readings-text11">{props.text1}</span>
        <span className="last-readings-text12">
          <span>86</span>
        </span>
        <span className="last-readings-text14">
          <span>140+</span>
        </span>
        <span className="last-readings-text16">
          <span>98</span>
        </span>
        <span className="last-readings-text18">
          <span>96</span>
        </span>
        <span className="last-readings-text20">
          <span>98</span>
        </span>
        <img
          alt={props.pastedImage_alt2}
          src={props.pastedImage_src2}
          className="last-readings-pasted-image"
        />
        <img
          alt={props.pastedImage_alt21}
          src={props.pastedImage_src21}
          className="last-readings-pasted-image1"
        />
        <img
          alt={props.pastedImage_alt211}
          src={props.pastedImage_src211}
          className="last-readings-pasted-image2"
        />
        <img
          alt={props.pastedImage_alt2111}
          src={props.pastedImage_src2111}
          className="last-readings-pasted-image3"
        />
        <img
          alt={props.pastedImage_alt3}
          src={props.pastedImage_src3}
          className="last-readings-pasted-image4"
        />
        <div className="last-readings-previous-scans">
          <Link to="/all-tests" className="last-readings-navlink button">
            <img
              alt={props.pastedImage_alt6}
              src={props.pastedImage_src6}
              className="last-readings-pasted-image5"
            />
          </Link>
        </div>
      </div>
      <style jsx>
        {`
          .last-readings-container {
            width: 972px;
            height: 206px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-radius: Radius16;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
          }
          .last-readings-text {
            left: 696px;
            color: #2c2c2c;
            bottom: 31px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 400;
          }
          .last-readings-text01 {
            left: 404px;
            color: #2c2c2c;
            bottom: 31px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 400;
          }
          .last-readings-text02 {
            left: 261px;
            color: #2c2c2c;
            bottom: 31px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 400;
          }
          .last-readings-text03 {
            left: 139px;
            color: #2c2c2c;
            bottom: 31px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 400;
          }
          .last-readings-text04 {
            left: 24px;
            color: #2c2c2c;
            bottom: 31px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 400;
          }
          .last-readings-text05 {
            top: 106px;
            left: 23px;
            color: rgb(221, 101, 101);
            height: auto;
            position: absolute;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .last-readings-text06 {
            top: 75px;
            left: 24px;
            color: #2c2c2c;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 700;
          }
          .last-readings-text07 {
            top: 75px;
            left: 694px;
            color: #2c2c2c;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 700;
          }
          .last-readings-text08 {
            top: 75px;
            left: 508px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 700;
          }
          .last-readings-text09 {
            top: 75px;
            left: 403px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 700;
          }
          .last-readings-text10 {
            top: 75px;
            left: 259px;
            position: absolute;
            font-style: normal;
            font-family: Manrope;
            font-weight: 700;
          }
          .last-readings-text11 {
            top: 24px;
            left: 24px;
            color: #2c2c2c;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-family: Manrope;
            font-weight: 700;
          }
          .last-readings-text12 {
            top: 106px;
            left: 694px;
            color: rgba(101, 177, 141, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .last-readings-text14 {
            top: 106px;
            left: 136px;
            color: rgba(221, 101, 101, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .last-readings-text16 {
            top: 106px;
            left: 402px;
            color: rgba(101, 177, 141, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .last-readings-text18 {
            top: 106px;
            left: 259px;
            color: rgba(221, 101, 101, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .last-readings-text20 {
            top: 106px;
            left: 508px;
            color: rgba(101, 177, 141, 1);
            height: auto;
            position: absolute;
            font-size: 32px;
            align-self: auto;
            font-style: SemiBold;
            text-align: left;
            font-family: Manrope;
            font-weight: 600;
            line-height: normal;
            font-stretch: normal;
            text-decoration: none;
          }
          .last-readings-pasted-image {
            top: 75px;
            left: 235px;
            width: 2px;
            height: 104px;
            position: absolute;
          }
          .last-readings-pasted-image1 {
            top: 75px;
            left: 368px;
            width: 2px;
            height: 104px;
            position: absolute;
          }
          .last-readings-pasted-image2 {
            top: 75px;
            left: 479px;
            width: 2px;
            height: 104px;
            position: absolute;
          }
          .last-readings-pasted-image3 {
            top: 75px;
            left: 673px;
            width: 2px;
            height: 104px;
            position: absolute;
          }
          .last-readings-pasted-image4 {
            top: 154px;
            left: 508px;
            width: 90px;
            height: 32px;
            position: absolute;
          }
          .last-readings-previous-scans {
            flex: 0 0 auto;
            right: 0px;
            width: 134px;
            height: 206px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            border-top-left-radius: 0px;
            border-top-right-radius: 16px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 16px;
          }
          .last-readings-navlink {
            color: #285bf4;
            width: 134px;
            height: 206px;
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: #ffffff;
            border-top-left-radius: 0px;
            border-top-right-radius: 16px;
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 16px;
          }
          .last-readings-pasted-image5 {
            right: 0px;
            width: 134px;
            bottom: 0px;
            height: 206px;
            position: absolute;
          }
          .last-readings-root-class-name {
            top: 370px;
            left: 10px;
            position: absolute;
          }
          .last-readings-root-class-name1 {
            top: 370px;
            left: 23px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

LastReadingsNew.defaultProps = {
  pastedImage_alt211: 'pastedImage',
  button: 'Previous Scans',
  pastedImage_alt2111: 'pastedImage',
  pastedImage_src2: '/playground_assets/pastedimage-49jf.svg',
  pastedImage_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad70916a-f415-4750-9137-4b10449e965f/597d772a-e1d1-40d5-99fa-b91968536155?org_if_sml=11111',
  text2: 'Blood Glucose',
  pastedImage_alt2: 'pastedImage',
  pastedImage_alt21: 'pastedImage',
  text24: 'Body Temperature',
  text1: 'Your last readings',
  text214: 'BPM',
  text2151: '%',
  button1: 'Button',
  pastedImage_alt3: 'pastedImage',
  pastedImage_src3: '/playground_assets/pastedimage-6tbk.svg',
  text212: 'mm Hg',
  rootClassName: '',
  pastedImage_src2111: '/playground_assets/pastedimage-49jf.svg',
  text23: 'SpO2',
  text22: 'Heart Rate',
  text211: 'Blood Pressure',
  text213: 'mm Hg',
  pastedImage_alt1: 'pastedImage',
  pastedImage_src21: '/playground_assets/pastedimage-49jf.svg',
  text215: 'Mg/DL',
  pastedImage_src211: '/playground_assets/pastedimage-49jf.svg',
  pastedImage_alt: 'pastedImage',
  pastedImage_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad70916a-f415-4750-9137-4b10449e965f/d5b26d76-5495-4e3f-bc09-65482dcdd558?org_if_sml=114266',
  pastedImage_src4:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad70916a-f415-4750-9137-4b10449e965f/483e3845-fbc7-43a2-8f0b-cc697fcaf70e?org_if_sml=114266',
  pastedImage_alt4: 'pastedImage',
  pastedImage_src5:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ad70916a-f415-4750-9137-4b10449e965f/3d17a522-3bf6-4a19-b4d1-54ba1a9ec22d?org_if_sml=114266',
  pastedImage_alt5: 'pastedImage',
  button2: 'Button',
  pastedImage_src6: '/playground_assets/pastedimage-78ac.svg',
  pastedImage_alt6: 'pastedImage',
}

LastReadingsNew.propTypes = {
  pastedImage_alt211: PropTypes.string,
  button: PropTypes.string,
  pastedImage_alt2111: PropTypes.string,
  pastedImage_src2: PropTypes.string,
  pastedImage_src1: PropTypes.string,
  text2: PropTypes.string,
  pastedImage_alt2: PropTypes.string,
  pastedImage_alt21: PropTypes.string,
  text24: PropTypes.string,
  text1: PropTypes.string,
  text214: PropTypes.string,
  text2151: PropTypes.string,
  button1: PropTypes.string,
  pastedImage_alt3: PropTypes.string,
  pastedImage_src3: PropTypes.string,
  text212: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src2111: PropTypes.string,
  text23: PropTypes.string,
  text22: PropTypes.string,
  text211: PropTypes.string,
  text213: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_src21: PropTypes.string,
  text215: PropTypes.string,
  pastedImage_src211: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_src4: PropTypes.string,
  pastedImage_alt4: PropTypes.string,
  pastedImage_src5: PropTypes.string,
  pastedImage_alt5: PropTypes.string,
  button2: PropTypes.string,
  pastedImage_src6: PropTypes.string,
  pastedImage_alt6: PropTypes.string,
}

export default LastReadingsNew
