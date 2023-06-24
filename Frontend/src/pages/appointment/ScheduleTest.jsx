import React, { useState,useEffect } from 'react';
// import { RequestPermission } from '../messaging_init_in_sw.js';
import { sendNotificationToken,sendNotificationData } from '../../url/url';
import {messaging,getTokenAsync } from "../Firebase/FirebaseConfig";
import axios from 'axios';
import api from '../../api';


function ScheduleTest() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const [token, setToken] = useState(null);

  async function getToken() {
    try {
      const newToken = await getTokenAsync();
      setToken(newToken);
      console.log('Token:', newToken);
    } catch (error) {
      console.error('Failed to get token:', error);
      // Handle the error
    }
  }
  

  useEffect(() => {
    if (!token) {
      getToken();
    } else {
      api.post(sendNotificationToken, {
        userId: 'p001',
        token:token ,
      })
        .then((response) => {
          console.log('Token saved successfully:', response.data);
        })
        .catch((error) => {
          console.error('Failed to save token:', error);
        });
    }
  }, [token]);
  

  const handleSubmit = () => {
    // Handle submit button click
    console.log('Submit clicked!');
    console.log('Input Text:', inputText);
   
  };



  const sendText = () => {
    // Handle button click
    console.log('Button clicked!');
    const messageText = "Hello, backend!";
  api.post(sendNotificationData,messageText)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        className="border border-gray-300 rounded px-4 py-2 mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2"
      >
        Submit
      </button>
      <button
        onClick={sendText}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Button
      </button>
    </div>
  );
}

export default ScheduleTest;
