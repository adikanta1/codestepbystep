import React, { useState } from 'react'
import LiftingStateChildA from './LiftingStateChildA'
import LiftingStateChildB from './LiftingStateChildB'

const LiftingStateUpExample = () => {
    const[user,setUser] = useState("")

  return (
    <div>
        <h1>Lifting stateup parent</h1>
        <LiftingStateChildA setUser={setUser}/>
        <LiftingStateChildB user={user}/>
    </div>
  )
}

export default LiftingStateUpExample