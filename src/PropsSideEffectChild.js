import { useEffect } from "react";

const PropsSideEffectChild=({data,count})=>{

    const handleCounter=()=>{
            console.log("Handle counter log");
    }

    const handleData=()=>{
        console.log("Handle data called")
    }

    useEffect(()=>{
        handleData();
    },[data,count])


    useEffect(()=>{
        handleCounter()
    },[])
    return(
    <>
        <h1>handle counter data{data}</h1>
        <h1>handle counter count{count}</h1>
    </>
    )
}
export default PropsSideEffectChild;