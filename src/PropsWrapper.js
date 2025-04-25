function PropsWrapper({children,color="green"}){
    return(
        <div style={{color:color,border:"5px solid green",width:"200px"}}>
            {children}
        </div>
    )
}
export default PropsWrapper;