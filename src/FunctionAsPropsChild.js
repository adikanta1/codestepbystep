const FunctionAsPropsChild=({callParentFunction,name,getUser})=>{
   
    // const name = "Anil"
    return(
    <>
    <button onClick={()=>callParentFunction(name)}>Call Parent</button>
    <button onClick={getUser}>Get User</button>
    </>
    )
}
export default FunctionAsPropsChild;