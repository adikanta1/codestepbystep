// import React, { forwardRef } from 'react'

// const ForwardRefChild = (props,ref) => {
//   return (
//     <div>
//     <input type="text" ref={ref}/>

//     </div>
//   )
// }

// export default forwardRef(ForwardRefChild)

const ForwardRefChild=(props)=>{
    return<div>
        <input type="text" ref={props.ref}/>
    </div>
}
export default ForwardRefChild