import React from 'react'
import { useFormStatus } from 'react-dom';
const UseFormStatusExample = () => {


    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 2000));
        console.log("Submit");

    }

    const InputDesign = () => {
        const { pending } = useFormStatus();
        console.log(pending);

        return (
            <div>
                <input type='text' placeholder='Enter name' />
                <input type='password' placeholder='Enter Password' />
               <button disabled={pending}> {pending ? "Submiting...":"Submit"}</button>

            </div>
        )
    }
    return (
        <div>
            <h1>UseFormStatus Hook Example</h1>
            <form action={handleSubmit}>
                <InputDesign />
            </form>

        </div>
    )
}

export default UseFormStatusExample