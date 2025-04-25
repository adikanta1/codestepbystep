import { useState } from "react";

function InputFieldValue(){

    const[userName,setuserName] = useState("Arvik")
    return(
        <div>
            <h1>InputField Value</h1>
            <input type="text" value={userName}placeholder="Enter user name" onChange={(event)=>setuserName(event.target.value)}/>
            <button onClick={()=>{setuserName("")}}>Value</button>
            <h1>{userName}</h1>
        </div>
    )
}

export default InputFieldValue;