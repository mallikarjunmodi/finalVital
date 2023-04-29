import React from 'react'

import PropTypes from 'prop-types'

const UserSelection = (props) => {
  return (
    <>
      <div className={`user-selection-container ${props.rootClassName} `}>
        <div className="user-selection-background">
          <span className="user-selection-text">{props.text}</span>
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="user-selection-pasted-image"
          />
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="user-selection-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .user-selection-container {
            width: 112px;
            height: 150px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .user-selection-background {
            flex: 0 0 auto;
            width: 112px;
            height: 112px;
            display: flex;
            position: relative;
            align-self: center;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #ffffff;
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;
            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;
          }
          .user-selection-text {
            top: 128px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .user-selection-pasted-image {
            top: 34px;
            left: 34px;
            width: 44px;
            height: 44px;
            position: absolute;
          }
          .user-selection-image {
            top: 34px;
            left: 34px;
            width: 44px;
            height: 44px;
            position: absolute;
            object-fit: cover;
            border-radius: 50px;
          }
          .user-selection-root-class-name {
            top: 231px;
            left: 152px;
            position: absolute;
          }
          .user-selection-root-class-name1 {
            top: 231px;
            left: 304px;
            position: absolute;
          }
          .user-selection-root-class-name2 {
            top: 231px;
            left: 456px;
            position: absolute;
          }
          .user-selection-root-class-name3 {
            top: 231px;
            left: 613px;
            position: absolute;
          }
          .user-selection-root-class-name4 {
            top: 231px;
            left: 765px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

UserSelection.defaultProps = {
  pastedImage_alt: 'pastedImage',
  rootClassName: '',
  pastedImage_src: '/playground_assets/pastedimage-9h3d.svg',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  image_alt: 'image',
  text: 'Username',
}

UserSelection.propTypes = {
  pastedImage_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
}

export default UserSelection
