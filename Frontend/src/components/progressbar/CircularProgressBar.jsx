import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

import AnimatedProgressProvide from "./AnimatedProgressProvide";
import ChangingProgressProvider from "./ChangingProgressProvide";

function CircularProgressBar(props)
{
    const percentage = 40;
    
    console.log("propvalue",props.value);
    let sdata = props.data;
    let values = [0];
    if(sdata.state === "continue")
    {
      values.push(sdata.dia);
       values.shift();
    }
  return(
    <>
     <ChangingProgressProvider  values={values}>
{percentage => (
  <CircularProgressbar
  strokeWidth={2}
    value={percentage*100/200}
    text={props.type!=="hr" ? `${percentage}` : null}
    styles={
        buildStyles({
    //   pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    pathColor: `rgba(26, 181, 143, 1)`,
      pathTransitionDuration: .10,
      trailWidth: 10,
      strokeLinecap: 'round',
      strokeWidth: 10,
    })}
  />
)}
</ChangingProgressProvider>
    </>);
}
export default  CircularProgressBar;


// import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import PropTypes from 'prop-types';

// import AnimatedProgressProvide from "./AnimatedProgressProvide";
// import ChangingProgressProvider from "./ChangingProgressProvide";

// function CircularProgressBar(props) {
//   const percentage = 40;

//   let sdata = props.data;
//   let values = [0];
//   if (sdata.state === "continue") {
//     values.push(sdata.dia);
//     values.shift();
//   }

//   return (
//     <>
//       <ChangingProgressProvider values={values}>
//         {percentage => (
//           <div style={{ width: '300px', height: '300px', }}>
//             <CircularProgressbarWithChildren
//               value={percentage * 100 / 200}
//               strokeWidth={2}
//               styles={buildStyles({
//                 pathColor: `rgba(26, 181, 143, 1)`,
//                 trailColor: '#d6d6d6',
//               })}
//             >
//               <CircularProgressbar
//                 value={percentage * 100 / 200}
//                 text={props.type !== "hr" ? `${percentage}` : null}
//                 styles={buildStyles({
//                   pathColor: `rgba(26, 181, 143, 1)`,
//                   trailColor: 'transparent',
//                 })}
//               />
//             </CircularProgressbarWithChildren>
//           </div>
//         )}
//       </ChangingProgressProvider>
//     </>
//   );
// }

// CircularProgressBar.propTypes = {
//   data: PropTypes.object.isRequired,
//   type: PropTypes.string.isRequired,
// };

// export default CircularProgressBar;
