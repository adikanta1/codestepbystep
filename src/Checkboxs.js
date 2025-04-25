import { useState } from "react"

function Checkboxs(){

    const[skills,setSkills] = useState([])

    const handleSkills=(event)=>{
        console.log(event.target.value, event.target.checked)

        if(event.target.checked){
            setSkills([...skills,event.target.value])
            // setSkills([event.target.value)
        }else{
            setSkills([skills.filter((item)=>item!=event.target.value)])
        }
        console.log(skills)
    }
    return(
        <div>
            <h1>Select your Skills</h1>

            <input onChange={handleSkills} type="checkbox" id ="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br/>

            <input onChange={handleSkills} type="checkbox" id ="java" value="java"/>
            <label htmlFor="java">Java</label>
            <br/>

            <input onChange={handleSkills} type="checkbox" id ="react" value="react"/>
            <label htmlFor="react">React</label>
            <br/>

            <input onChange={handleSkills} type="checkbox" id ="python" value="python"/>
            <label htmlFor="python">Python</label>

            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default Checkboxs