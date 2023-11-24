
import { useState } from "react";

function Str(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [showName,setShowName]=useState('');
    const submit=()=>{
setShowName(firstName+lastName);
    }

return(
    <>
    <input type="text" onChange={(ev)=>setFirstName(ev.target.value)} />
    <input type="text" onChange={(ev)=>setLastName(ev.target.value)} />
    <span>{showName}</span>
    <button onClick={submit}>Submit</button>
    </>
    

)
}
export default Str