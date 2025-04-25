import { useEffect, useState } from "react";
const UseEffectHooks=()=>{

    const[counter,setCounter] = useState(0)
    const[data,setData] = useState(0);

    function callHooks(){
        console.log("Call once function called")
    }


    useEffect(()=>{
    callHooks();
    },[])

    useEffect(()=>{
        counterFun();
    },[counter])


    function counterFun(){
        console.log("Counter function called")
    }

    return(
    <>
        <h1 style={{color:"red",backgroundColor:"black"}}>UseEffectHooks Example</h1>
        <button onClick={()=>setCounter(counter+1)}>Click{counter}</button>
        <button onClick={()=>setData(counter-1)}>Submit{data}</button>
    </>
)
}
export default UseEffectHooks;