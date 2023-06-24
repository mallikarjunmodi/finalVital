// import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserSelect from "./pages/UserSelect";
import Home from './pages/Home';
import AllTests from './pages/AllTests';

import Dashboard from './pages/Dashboard_popup';
import LoginSetUpPage from './pages/LoginSetUpPage';
import PhoneNumber from './pages/PhoneNumberSignUp';
import SignUpForm from './pages/SignUpForm';
import LoginForm from './pages/LoginForm';
import Bpexisting from './pages/Bpexisting';
import BpfirstTime from './pages/BpfirstTime';
import HeartRateExisting from './pages/HeartRateExisting';
import BodyTemperatureExisting from './pages/BodyTemperatureExisting';
import BloodGlucoseExisting from './pages/BloodGlucoseExisting';
import AllTestTogetherPopUpPage from './pages/AllTestTogetherPopUpPage';
import HomeGraph from './pages/HomeGraph';
import VideoConf  from './pages/VideoConf';
import Schedule from "./pages/appointment/Schedule"
function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
         {/* <Route path='/' element={<LoginSetUpPage/>} />    */}
         <Route path='/' element={<UserSelect />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/homegraph' element={<HomeGraph />} />

          <Route path='/AllTests' element={<AllTests />} />
         <Route path='/loginForm' element={<LoginForm/>} /> 
         <Route path='/signUpForm' element={<SignUpForm/>} /> 
         {/* <Route path='/dashboard' element={<Dashboard />} />  */}
         <Route path='/phonenumber' element={<PhoneNumber />} /> 
         <Route path='/bpexisting' element={<Bpexisting/>}/>
         <Route path='/heartrateexisting' element={<HeartRateExisting/>}/>
         <Route path='/bodytemperatureexisting' element={<BodyTemperatureExisting/>}/>
         <Route path='/bloodglucoseexisting' element={<BloodGlucoseExisting/>}/>
         <Route path='/bpfirsttime' element={<BpfirstTime/>}/> 
         <Route path='/AllTestTogether' element={<AllTestTogetherPopUpPage/>}/> 
         <Route path='/videoconf' element={<VideoConf/>}/> 
         <Route path='/schedule' element={<Schedule/>}/> 
            {/* <Route path='/home' element ={<Home />}/>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} /> */}
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
