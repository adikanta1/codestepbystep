import React, { useState } from 'react'

const UpdatingArrayInReact = () => {
  const[data,setData]= useState(['Adi','Abhi','Arvi'])
  
const[dataDetails,setdataDetails] = useState([
    {name:'Anil',age:29},
    {name:'Arvi',age:39},
    {name:'Abhi',age:32}
])

  const updatedata=(name)=>{
    data[data.length-1] = name
    setData([...data,name])
  }

  const updateAge=(name)=>{
    dataDetails[dataDetails.length-1].age = name
    setdataDetails([...dataDetails,name])
  }

  return (
    <div>
        <h1>Updating an array in React js</h1>
        {/* <button onClick={()=>setName("Sidhu")}>Update</button> */}
    <input type='text' placeholder='Enter last use name' onChange={(event)=>updatedata(event.target.value)}/>
    <input type='text' placeholder='Enter last use age' onChange={(event)=>updateAge(event.target.value)}/>

    {data.map((item,index)=><h1 key={index}>{item}</h1>)}
    {dataDetails.map((item,index)=><h1 key={index}>{item.name} ,{item.age}</h1>)}

    </div>
  )
}

export default UpdatingArrayInReact