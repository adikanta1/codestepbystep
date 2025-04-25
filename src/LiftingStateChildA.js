import React, { useState } from 'react'

const LiftingStateChildA = ({setUser}) => {
  return (
    <div>
        <h1>Lifting stateup A</h1>
        <h1>Add User</h1>
        <input type='text' placeholder='Enter user name' onChange={(event)=>setUser(event.target.value)}/>
        <hr/>
    </div>
  )
}

export default LiftingStateChildA