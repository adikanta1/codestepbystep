import {useState} from 'react'

function Count(){
const [countValue,setCountValue] = useState(0)


return(
    <div>
        <h1>The value is ${countValue}</h1>
        <button onClick={()=>setCountValue(countValue+1)}>Click More</button>
    </div>
)
}
export default Count;