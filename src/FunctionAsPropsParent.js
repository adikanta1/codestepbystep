import FunctionAsPropsChild from "./FunctionAsPropsChild";

const FunctionAsPropsParent = () => {

    const callParentFunction =(name)=> {
        alert("Call from child component"+name)
    }

    const getUser=()=>{
        alert("Get user function called")
    }
    return (
        <>
            <h1>Call parent function from child component</h1>
            <FunctionAsPropsChild callParentFunction={callParentFunction} name="A"  getUser={getUser}/>
        </>
    )
}
export default FunctionAsPropsParent;