import React from 'react'

import PropTypes from 'prop-types'

const UpperBar = (props) => {
  return (
    <>
      <div className={`upper-bar-container ${props.rootClassName} `}>
        <span className="upper-bar-text">{props.Text}</span>
        <img
          alt={props.pastedImage_alt}
          src={props.pastedImage_src}
          className="upper-bar-pasted-image"
        />
        <img
          alt={props.pastedImage_alt1}
          src={props.pastedImage_src1}
          className="upper-bar-pasted-image1"
        />
      </div>
      <style jsx>
        {`
          .upper-bar-container {
            width: 1024px;
            height: 32px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #393939;
          }
          .upper-bar-text {
            top: 8px;
            left: 851px;
            color: rgb(255, 255, 255);
            position: absolute;
            font-size: 12px;
            font-family: Manrope;
          }
          .upper-bar-pasted-image {
            top: 7px;
            left: 931px;
            width: 24px;
            height: 17px;
            position: absolute;
          }
          .upper-bar-pasted-image1 {
            top: 10px;
            left: 971px;
            width: 24px;
            height: 13px;
            position: absolute;
          }

          .upper-bar-root-class-name3 {
            top: 0px;
            left: 0px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

UpperBar.defaultProps = {
  rootClassName: '',
  pastedImage_src: '/playground_assets/pastedimage-g7df.svg',
  pastedImage_alt1: 'pastedImage',
  pastedImage_alt: 'pastedImage',
  Text: '12:03 P.M.',
  pastedImage_src1: '/playground_assets/pastedimage-007e.svg',
}

UpperBar.propTypes = {
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt1: PropTypes.string,
  pastedImage_alt: PropTypes.string,
  Text: PropTypes.string,
  pastedImage_src1: PropTypes.string,
}

export default UpperBar
