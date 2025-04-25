import { useState } from "react";

const DynamicConitionalInlineStyle=()=>{

        const[cardStyle,setCardStyle] = useState({
            width: "200px",
            height: "200px",
            borderWidth: "2px",
            boxShadow: "2px 3px 2px 3px #000000",
            margin:"12px"
        })

        const[textColor,setTextColor] = useState("red");
        const[grid,setGrid] = useState(true);

        const updateTheme=(bgColor,textColor)=>{
            console.log(bgColor +"--"+textColor);
            
            setCardStyle({...cardStyle,backgroundColor:bgColor})
            setTextColor(textColor)
        }
   
   
       return(
           <>   
                <div style={cardStyle}>
               <h1 >handle counter data and count</h1> 
               <h1 style={{color:textColor}}>handle counter </h1> 

                    </div>       
               <button onClick={()=>updateTheme('gray','green')}>Gray Theme</button>   
               <button onClick={()=>updateTheme('white','black')}>Default Theme</button>  
               <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>  
              <div style={{display: grid? 'flex':'block',flexWrap:"wrap"}}>
              <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
               
              <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
              
              <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
              
              <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
              
              <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
              
              <img src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
              </div>
           </>
       )
}
export default DynamicConitionalInlineStyle;