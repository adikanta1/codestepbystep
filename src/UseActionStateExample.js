import React, { useActionState } from 'react'

const UseActionStateExample = () => {

    const handleSubmit=async(previosdata,formdata)=>{
        let name=formdata.get('name');
        let password=formdata.get('password');
    
        await new Promise(res=>setTimeout(res,2000))
        console.log("handle submit called"+name+"   "+password);

        if(name && password){
            return{message:"Data Submitted",name,password}
        }else{
            return{error:"failed to submit.Enter proper data"}
        }
    }
    
    const[data,action,pending] = useActionState(handleSubmit,undefined)
    console.log(data);
 
    return (
    <div>
        <h1>UseAction state example in React JS</h1>
        <form action={action}>
        <input defaultValue={data?.name} type='text' placeholder='Enter name' name="name"/>
        <input defaultValue={data?.password} type='text' placeholder='Enter password' name="password"/>
        <button disabled={pending}>Submit</button>
                </form>

                {data?.error && <span style={{color:'red'}}>{data.error}</span>}
        <br/>
        {data?.message && <span style={{color:'green'}}>{data.message}</span>}
<h3>{data?.name}</h3>
<h3>{data?.password}</h3>
    </div>
  )
}

export default UseActionStateExample