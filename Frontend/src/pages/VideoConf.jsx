import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"
function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
    url = window.location.href
    ) {
        let urlStr = url.split('?')[1];
        return new URLSearchParams(urlStr);
    }
    
    export default function VideoConf() {
        const navigate = useNavigate();
        
        const handleLeaveRoom = () => {
            // Navigate to another page when the host leaves the room
           console.log("Entering");
           navigate('/dashboard');
          }
      // const roomID = getUrlParams().get('roomID') || randomID(5);
      const roomID ="0001";
      const userName= randomID(5)
      let userID= randomID(5)
      let myMeeting = async (element) => {
     // generate Kit Token
      const appID =28148773;
      const serverSecret = "789de895de72fa5fb4f421354c94663a";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,userID,userName);


     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        showPreJoinView: false,
        // sharedLinks: [
        //   {
        //     name: 'Personal link',
        //     url:
        //     "http://localhost:3000/?roomIDXirdc"
        //   },
        // ],
        scenario: {
        //  mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        mode: ZegoUIKitPrebuilt.VideoConference,
        },
       
          onLeaveRoom: handleLeaveRoom 
      });


  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}





// import * as React from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

// import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"
// function randomID(len) {
//   let result = '';
//   if (result) return result;
//   var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
//     maxPos = chars.length,
//     i;
//   len = len || 5;
//   for (i = 0; i < len; i++) {
//     result += chars.charAt(Math.floor(Math.random() * maxPos));
//   }
//   return result;
// }

// export function getUrlParams(
//     url = window.location.href
//     ) {
//         let urlStr = url.split('?')[1];
//         return new URLSearchParams(urlStr);
//     }
    
//     export default function VideoConf() {
//         const navigate = useNavigate();
        
//         const handleLeaveRoom = () => {
//             // Navigate to another page when the host leaves the room
//            console.log("Entering");
//            navigate('/dashboard');
//           }
//       const roomID = getUrlParams().get('roomID') || randomID(5);
//       let myMeeting = async (element) => {
//      // generate Kit Token
//       const appID =699334673;
//       const serverSecret = "43d1582c29b305b08a87795a99495896";
//       const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));


//      // Create instance object from Kit Token.
//       const zp = ZegoUIKitPrebuilt.create(kitToken);
//       // start the call
//       zp.joinRoom({
//         container: element,
//         showPreJoinView: false,
//         sharedLinks: [
//           {
//             name: 'Personal link',
//             url:
//              window.location.protocol + '//' + 
//              window.location.host + window.location.pathname +
//               '?roomID=' +
//               roomID,
//           },
//         ],
//         scenario: {
//           mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
//         },
       
//           onLeaveRoom: handleLeaveRoom 
//       });


//   };

//   return (
//     <div
//       className="myCallContainer"
//       ref={myMeeting}
//       style={{ width: '100vw', height: '100vh' }}
//     ></div>
//   );
// }




