import { useState } from "react";
import DefaultPropsChild from "./DefaultPropsChild";
import PropsWrapper from "./PropsWrapper";

function DefaultProps(){
    const [stateValue,setStatevalue] = useState(0)

    function updateState(){
        setStatevalue(stateValue+1);
    }
    return(
        <div>
            <h1>props in React JS</h1>
            {/* <DefaultPropsChild name = "Adikanta"/>
            <DefaultPropsChild name = "Abhishek"/> */}

            <PropsWrapper>
            <h1>Props Wrapper{stateValue}</h1>
            <h1 style={{color:"red"}}>Hello Admin</h1>
                <button onClick={updateState}>Submit</button>
                </PropsWrapper>

            <PropsWrapper color="blue">
            <h1>Props Wrapper{stateValue}</h1>
            </PropsWrapper>
        </div>
    )
}
export default DefaultProps;