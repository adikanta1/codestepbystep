import { useState } from "react";
import Count from "./Count";
function ToggleorHideshow(){
    const [display,setDisplay] = useState(false)
    const [count,setCount] = useState(0)
    return(
        <div>
            {count == 0 ? <h1>Adikanta</h1>
            :count == 1  ? <Count/> 
            :count == 2 ? "Count is 2"
            : null }
            <button onClick={()=>setCount(count+1)}>Count</button>
        </div>
    )
}
export default ToggleorHideshow;