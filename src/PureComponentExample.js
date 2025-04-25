import React from 'react'

let count = 0
const PureComponentExample = () => {
  return (
    <div>
        <p>Pure component example</p>
        <Counter/>
        <Counter/>
        <Counter/>
    </div>
  )
}

const Counter=()=>{
    count=count+1
    return <h1>Counter{count}</h1>
}

export default PureComponentExample