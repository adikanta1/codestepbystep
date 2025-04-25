import { useState } from "react"
function StateExample(){
    let fruit = "Apple"

    const [stateExam,setStateExam] = useState("Apple")

const handleFruit =()=>{
    fruit = "Banana"
    setStateExam("Banana")
    console.log(`handle fruit : ${fruit}`)
    console.log(`handle stateExam : ${stateExam}`)
}

    return(
    <div>
        <h1>{fruit}</h1>
        <h1>{stateExam}</h1>
        <button onClick={handleFruit}>Click</button>
    </div>
    )
}
export default StateExample;