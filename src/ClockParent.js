import { useState } from "react";
import Clock from "./Clock";

const ClockParent=()=>{
    const[color,setColor] = useState("Blue")
    return(
    <>
        <select onChange={(event)=>setColor(event.target.value)}>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
            <option value={"red"}>Red</option>
            <option value={"orange"}>Orange</option>
        </select>
        <Clock color={color}/>
    </>
)
}

export default ClockParent;