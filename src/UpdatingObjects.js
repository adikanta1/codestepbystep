import React, { useState } from 'react'

const UpdatingObjects = () => {
    const[name,setName] = useState("Anil")
    const[data,setData] = useState({
        name:"Abhii",
        address:{
            city:"ctc",
            country:"India"
        }
    })

    const handleName=(name)=>{
    //    setName(name)
    data.name = name
    setData({...data})
    }
    const handleCity=(city)=>{
        //    setName(name)
        data.address.city = city
        setData({...data,address:{...data.address,city}})
        }
  return (
    <div>
        <h1>Update object of State</h1>
        <input type='text' placeholder='Enter name' onChange={(event)=>handleName(event.target.value)}/>
        <input type='text' placeholder='Enter city' onChange={(event)=>handleCity(event.target.value)}/>
        
        <h2>Name : {data.name}</h2>
        <h2>Name : {data.address.city}</h2>
        <h2>Name : {data.address.country}</h2>
        {/* <button onClick={handleName}>Update Name</button> */}
    </div>
  )
}

export default UpdatingObjects