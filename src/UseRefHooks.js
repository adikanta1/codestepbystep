import {useRef} from 'react'
const UseRefHooks=()=>{
    const inputRef = useRef(null)

    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus()
        inputRef.current.style.color="red"
        inputRef.current.placeholder = "Enter Password"
    }
    return(
    <>
    <h1>UseRefHooks Example</h1>
    <input ref={inputRef} type="text" placeholder="Enter user name"/>
    <button onClick={inputHandler}>Focus on input field</button>
    </>
    )
}
export default UseRefHooks;