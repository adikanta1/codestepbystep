import { useEffect } from "react";
const UseEffectLifecycle=({data,count})=>{

    useEffect(()=>{
        console.log("Mount called");
    },[]);

    useEffect(()=>{
        console.log("Update called");
    },[count]);

    useEffect(()=>{
        return ()=>{
            console.log("Unmount phase only")
        }
    },[]
    )

    const stylesObj = {
        width: "200px",
        height: "100px",
        backgroundColor: "burlywood",
        borderWidth: "2px",
        boxShadow: "2px 3px 2px 3px #000000",
        margin:"12px"
    }

    return(
        <>          
            <h1>handle counter data{data} and count {count}</h1>        
           <div style={{display: "flex",flexWrap:"wrap"}}>
           <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" style={stylesObj}></img>
            <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" style={stylesObj}></img>
            <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" style={stylesObj}></img>
            <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" style={stylesObj}></img>
            <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" style={stylesObj}></img>
            <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" style={stylesObj}></img>

           </div>
        </>
    )
}
export default UseEffectLifecycle;