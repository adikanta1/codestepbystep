import { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

const ForwardRefExample=()=>{
   
    const inputRef = useRef(null)

    const updateInput=()=>{
        inputRef.current.value = 1000
        inputRef.current.focus()
        inputRef.current.style.color="red"
    }
    return(
    <>
    <ForwardRefChild ref={inputRef}/>
    <button onClick={updateInput}>Update Button Field</button>
    </>
    )
}
export default ForwardRefExample;
// https://youtube.com/shorts/0NI85naAM2o?si=vIh1nWjIXrrYtIlh


