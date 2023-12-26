'use clint'
import { useState } from 'react'
import './App.css'
import Str from './Str';
import Watch from './Watch';
import CalculateAge from './CalculateAge';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Hello</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App(){
  // const [counter,setCounter]=useState(0);
  // const buttonstyle= {
  //   backgroundColor:'blue',
  //   color:'@1e1e1e',
  //   fontSize:'20px',
  //   margin:'8px',
  //   padding:'8px 18px',
  //   boderRadius:'5px',
  //   outLine:'none',

  // }

return(
  <div>
    
  {/* <h3 className='counter-text'>{counter}</h3>
  <h1>hello </h1>
    <button className='btn'  onClick={()=>setCounter((counter)=>counter+1)}>Increment</button>
    <button className='btn'  onClick={()=>setCounter((counter)=>counter-1)}>Decrement</button>
   
   <Str/>
   <Watch/> */}
    <CalculateAge/>
   </div>
)};

export default App
