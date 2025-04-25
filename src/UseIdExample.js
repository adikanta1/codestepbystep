import React, { useId } from 'react'

const UseIdExample = () => {
    const id = useId();
  return (
    <div>
        <p>UseId Example in React js</p>
        <p>{id}</p>
        </div>
  )
}

export default UseIdExample