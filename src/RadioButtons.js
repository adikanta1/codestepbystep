import { useState } from "react"

function RadioButtons(){

    const[gender,setGender] = useState("female")
    const[city,selectedCity] = useState("odisha")
    return(
    <div>
        <h1>Radio Button Example</h1>
        <input type="radio" name="gender" id="male" checked={gender == "male"} value={"male"} onChange={(event)=>setGender(event.target.value)}/>
        <label htmlFor="male">Male</label>
        <br/>
        <input type="radio" name="gender" id="female" checked={gender == "female"} value={"female"}onChange={(event)=>setGender(event.target.value)}/>
        <label htmlFor="female">Female</label>

        <h4>Selected Gender : {gender}</h4>

        <h2>Select City</h2>
        <select defaultValue={"odisha"} onChange={(event)=>selectedCity(event.target.value)}>
            <option value={"odisha"}>Odisha</option>
            <option value={"delhi"}>Delhi</option>
            <option value={"mumbai"}>Mumbai</option>
        </select>
        <h4>Selected City:{city}</h4>
    </div>
    )
}
export default RadioButtons