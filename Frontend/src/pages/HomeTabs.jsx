import { useState } from 'react';
import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"

const HomeTabs = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  const navigate = useNavigate();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="containerr">
      <div className="tab-container">
        <div
          className={`tab ${activeTab === 'Upcoming' ? 'active' : ''}`}
          onClick={() => handleTabChange('Upcoming')}
        >
          &emsp;Upcoming
        </div>
        <div
          className={`tab ${activeTab === 'Consult' ? 'active' : ''}`}
          onClick={() => handleTabChange('Consult')}
        >
          &emsp;&ensp;Consult
        </div>
      </div>
      <div className="content-container">
        {activeTab === 'Upcoming' && (
          <div className="box upcoming">
                <br/>
            <p>Appointment with General Physician Dr. Adnan Rafiq</p>
            <p>
                <span className='time'>At <strong>12:45 PM</strong></span><span className='time'>&emsp;&emsp;&emsp;&emsp;&emsp;in <strong>10 mins</strong></span>
            </p>
            <button className="join-button" onClick={(e)=>{
                 navigate("/videoconf",); 
                 }}
            >Join</button>
          </div>
        )}
        {activeTab === 'Consult' && (
          <div className="box consult">
                <br/>
            <p>Schedule appointment with a doctor for an instant diagnosis.</p>
            <button className="schedule-button" onClick={(e)=>{
                 navigate("/schedule",); 
                 }}
            >Schedule appointment</button>
          </div>
        )}
      </div>
      <div className="dots-container">
        <div className={`dot ${activeTab === 'Upcoming' ? 'active' : ''}`} />
        <div className={`dot ${activeTab === 'Consult' ? 'active' : ''}`} />
      </div>

      <style jsx>{`
        .containerr {
          width: 250px;
          position: absolute;
          right: 1.6rem;
        //   padding-left : 24rem;
          margin-top: 0.2rem;
        }

        .tab-container {
          display: flex;
          justify-content: space-between;

        }

        .tab {
          cursor: pointer;
          padding: 10px 20px;
          font-weight: medium;
          user-select: none;
          font-size: 13px;
          width: 125px;
        }

        .tab.active {
          color: #004575;
          font-weight: bold;
          border-bottom: 4px solid #34C5AF;
        }

        .content-container {
        //   padding: 20px;
        }

        .box {
          border-radius: 0 0 10px 10px;
          height: 9rem;
          padding-bottom: 4px;
        }

        .upcoming {
          background-color: #f4fcf9;
        }

        .consult {
          background-color: #f4fcf9;
        }

        p {
            color : #189166;
            font-size: 13px;
            padding: 10px;
            margin-left: 8px;
        }

        .join-button {
          background-color: #20C389;
          color: white;
          border: none;
          padding: 5px 18px;
          border-radius: 10px;
          cursor: pointer;
          float: right;
          margin-right: 1rem;
        //   margin-top: 0.5rem;
          font-size: 10px;
          font-weight: bold;

        }

        .schedule-button {
            background-color: #20C389;
            color: white;
            border: none;
            padding: 5px 18px;
            border-radius: 10px;
            cursor: pointer;
            margin-top: 0.5rem;
            margin-left: 3.6rem;
            font-size: 10px;
            font-weight: bold;
          }

        .dots-container {
            display: flex;
            justify-content: center;
            margin-top: 10px;
          }
  
        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #bed6ff;
            margin: 0 4px;
            transition: background-color 0.3s ease-in-out;
          }
  
        .dot.active {
            background-color: #2574FF;
          }
      `}</style>
    </div>
  );
};

export default HomeTabs;
