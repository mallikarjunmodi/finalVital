import { useState } from "react";
import BackArrowBlue from "./assets/backArrowBlue.svg";
import {Link,Navigate,useNavigate,useParams,useLocation} from "react-router-dom"

function Schedule() {
  const [symptom_list, setsymptom_list] = useState(['Throat Pain']);
  const [symptom_input, setsymptom_input] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setsymptom_input(event.target.value);

  };

   const setList = () => {
    const clist = symptom_list.concat(symptom_input);
    if(symptom_input!="")
    setsymptom_list(clist);
  };


  const Sym_card = (props) => {
    return (
      <div className=" relative text-sm flex gap-[14px] w-[134px] h-[40px] top-[56px] mx-2 bg-green justify-center items-center text-white font-bold rounded-[4px]">
       <div>{props.sym}</div>
       <button>X</button>
      </div>
    )
  }

  return (
    <div className="w-[1024px] h-[600px] bg-[#F3F9FF] absolute font-manrope flex flex-col">
      <div className="relative flex top-16 ml-10">
        <button className=" mr-6"
        onClick={()=>{
            navigate("/dashboard")
        }}
        >
        <img
            alt="pastedImage"
            src={BackArrowBlue}
            className="  h-8 w-8"
          />
        </button>
        <h3 className="text-darkblue font-semibold text-xl">
          Schedule appointment
        </h3>
      </div>

      <div className=" container-1 absolute top-[118px] left-[32px] w-[963px] h-[135px] bg-white rounded-[20px]">
        <h3 className="relative symptom_text font-semibold top-[24px] left-[34px]">Enter your symptoms here</h3>
        <div className="flex ">
        <input
          className="symptom_dropdown relative w-[340px] h-[40px] left-[34px] top-[56px] border-[1px] border-solid border-gray rounded-[2px] p-4 mr-12"
          type="text"
          id="symptom"
          name="symptoms"
          onChange={handleChange}
          value={symptom_input}
          placeholder="Enter Your Symptoms"
        />
        <button onClick={setList} className=" relative text-sm flex gap-[14px] w-[50px] h-[40px] top-[56px] mx-2 bg-green justify-center items-center text-white font-bold rounded-[4px]">ADD</button>
       {symptom_list ? 

        <div className="symptom_list flex ">
          {symptom_list.map((symptom) => {
            return(<li className="list-none" key={symptom.id}><Sym_card sym={symptom} /></li>)
          })}
        </div> : " "
       }
        </div>
      </div>
      { symptom_list.length !=0 ?
      <div className="container-2 absolute w-[963px] h-[236px] bg-white rounded-[20px] left-[32px] top-[269px]">
      <h3 className="absolute font-semibold top-[20px] left-[24px]">Recommended Specialist</h3>

      <h3 className="absolute font-semibold top-[20px] left-[465px]">Search for specialist</h3>

      <input type="checkbox"  className=" absolute top-[69px] left-[44px] rounded-full w-4 h-4" defaultChecked="true"/>
      <h3 className=" absolute top-[66px] left-[66px]">General Physician</h3>
      <h3 className=" absolute top-[66px] left-[297px] font-bold">₹450</h3>

      <input type="checkbox"  className=" absolute top-[113px] left-[44px] rounded-full w-4 h-4" />
      <h3 className=" absolute top-[114px] left-[66px]">ENT Specialist</h3>
      <h3 className=" absolute top-[114px] left-[297px] font-bold">₹450</h3>

      <input
          className="relative w-[340px] h-[40px] left-[465px] top-[47px] border-[1px] border-solid border-gray rounded-[2px] p-4 mr-12"
          type="text"
          onChange={handleChange}
          placeholder="Enter A specialist"
        />

        <button className="absolute text-sm flex left-[831px] w-[118px] h-[40px] top-[179px]  bg-darkblue justify-center items-center text-white font-semibold rounded-[10px]">Continue</button>

      </div>
        : " "}


    </div>
  );
}

export default Schedule;