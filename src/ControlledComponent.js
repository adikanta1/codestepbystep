import { useState } from "react"

function ControlledComponent(){

    const[name,setName] = useState("");
    const[password,setPassword] = useState("");
    const[email,setEmail] = useState("");

    function clearData(){
        setName("")
        setPassword("")
        setEmail("")
    }
    return(
        <div>
            <h1>Controlled Component</h1>
            {/* <form action="" method="get"> */}
                <input type="text" value={name} placeholder="Enter name" onChange={(event)=>{setName(event.target.value)}}/>
                <br/><br/>
                <input type="password" value={password} placeholder="Enter password" onChange={(event)=>{setPassword(event.target.value)}}/>
                <br/><br/>
                <input type="text" value={email} placeholder="Enter email" onChange={(event)=>{setEmail(event.target.value)}}/>
                <br/><br/>
                <button >Submit</button>
                <button onClick = {()=>{setEmail("");setName("");setPassword("")}}>Clear</button>
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>
            {/* </form> */}
        </div>
    )

}
export default ControlledComponent