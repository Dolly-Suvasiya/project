import React from "react";
import { useState } from "react";
import './Watch.css';
import './App.css'

function Watch(){
    const [start,setStart]=useState(0);
    const [stop,setStop]=useState(0);
    const [reset,setReset]=useState(0);
    
    return(
      <div className="card watch-container">
<div className="watch-header">
  <div className="watch-time"></div>
  <div className="watch-time"></div>
</div>
<div className="watch-handles">
  <button className="btn">Start</button>
<button className="btn">Stop</button>
</div>
      </div>
    )
}
export default Watch