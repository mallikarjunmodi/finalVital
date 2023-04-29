import React from 'react'
import { Link } from 'react-router-dom'

import UpperBar from '../components/UpperBar'
import UserSelection from '../components/UserSelection'

const UserSelect = (props) => {
  return (
    <>
      <div className="user-select-container">
        <span className="user-select-text">12:03 P.M.</span>
        <UpperBar rootClassName="upper-bar-root-class-name4"></UpperBar>
        <Link to="/dashboard" className="user-select-navlink button">
          Continue
        </Link>
        <UserSelection rootClassName="user-selection-root-class-name4"></UserSelection>
        <UserSelection rootClassName="user-selection-root-class-name3"></UserSelection>
        <UserSelection rootClassName="user-selection-root-class-name2"></UserSelection>
        <UserSelection rootClassName="user-selection-root-class-name1"></UserSelection>
        <Link to="/dashboard" className="user-select-navlink1">
          <UserSelection
            rootClassName="user-selection-root-class-name"
            className="user-select-component5"
          ></UserSelection>
        </Link>
      </div>
      <style jsx>
        {`
          .user-select-container {
            width: 1024px;
            display: flex;
            overflow: auto;
            min-height: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #f3f9ff;
          }
          .user-select-text {
            top: 8px;
            color: #ffffff;
            right: 115px;
            position: absolute;
          }
          .user-select-navlink {
            top: 438px;
            left: 380px;
            color: #ffffff;
            width: 245px;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: center;
            font-family: Manrope;
            border-width: 0px;
            border-radius: 10px;
            justify-content: center;
            text-decoration: none;
            background-color: #285bf4;
          }
          .user-select-navlink1 {
            display: contents;
          }
          .user-select-component5 {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}

export default UserSelect
