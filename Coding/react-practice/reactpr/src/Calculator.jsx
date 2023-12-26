import React from "react";
import { useState } from "react";


function Calculator() {
    const [num1,setNum1]=useState(0);
    const [num2,setNum2]=useState(0);
    const [result,setResult]=useState(0);
    
//     const HandleChange=(event)=>{
// const value =event.target.value
// setNum1(value);
// console.log({value})
//     }

//     const HandleChange2=(event)=>{
//         const value =event.target.value
//         setNum2(value);
//         console.log({value})
//     }

   const Add =()=>{
    setResult(Number(num1)+Number(num2));
   }

   const Sub=()=>{
    setResult(Number(num1)-Number(num2));
   }
   const Mul=()=>{
    setResult(Number(num1)*Number(num2));
   }
   const Div=()=>{
    setResult(Number(num1)/Number(num2));

   }
return(
<> 
<input type="number" onChange={(ev)=>setNum1(ev.target.value)} id="num1" value={num1}/>
<input type="number" onChange={(ev)=>setNum2(ev.target.value)}  id="num2" value={num2}/>
<button onClick={Add}>ADD</button>
<button onClick={Sub}>SUB</button>
<button onClick={Mul}>MUL</button>
<button onClick={Div}>DIV</button>
<span>Result is:{result}</span>
</>
)};
export default Calculator