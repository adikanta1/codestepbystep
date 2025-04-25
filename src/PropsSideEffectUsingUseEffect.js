import { useState } from "react";
import PropsSideEffectChild from "./PropsSideEffectChild";
import UseEffectLifecycle from "./UseEffectLifecycle";

const PropsSideEffectUsingUseEffect=()=>{

    const[count,setCount] = useState(0);
    const[data,setData] = useState(0);

    const[display,setDisplay] = useState(false)
    
    return(
    <>
    {
        display? <UseEffectLifecycle data={data} count={count}/>:null
    }
        <h1 style={{color:'red',backgroundColor:'black'}}>Props Sideeffect</h1>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
        <button onClick={()=>setData(data+1)}>Click Data</button>
        {/* <PropsSideEffectChild data={data} count={count}/> */}
        <button onClick={()=>setDisplay(!display)}>Toggle</button>
        
    </>
    )
}
export default PropsSideEffectUsingUseEffect;