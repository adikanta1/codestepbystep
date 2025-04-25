import React, { useState, useTransition } from 'react'

const UseTransitionHooks = () => {

    // const[pending,setPending] = useState(false);
    const[pending,startTransition] = useTransition()

    const handleButton=async()=>{
        // setPending(true);
        startTransition(async()=>{
            await new Promise(res=>setTimeout(res,2000))
        })
        // setPending(false);
    }
  return (
    <div>
        <p>UseTransition hooks in React JS</p>
        <button disabled={pending} onClick={handleButton}>Click</button>
        {pending?<img src='https://tse2.mm.bing.net/th?id=OIP.pssn3lgjFJbODGO4PF3WUgAAAA&pid=Api&P=0&h=180' alt="loading" srcSet=''/> : null}
    </div>
  )
}

export default UseTransitionHooks