import { useRef } from "react";
const UncontrolledComponent=()=>{

    const userRef=useRef(null)
    const passwordRef = useRef("");

    const handleForm=(event)=>{
        event.preventDefault();
        console.log("handle form log")
        const user=document.querySelector("#user").value;
        const password = document.querySelector("#password").value;
        console.log(user);
        console.log(password);

    }

    const handleFormRef=(event)=>{
        event.preventDefault()

        const user =  userRef.current.value
        const password = passwordRef.current.value

        console.log(user +" ---"+password);
        
    }
    return(
    <>
    <h1>Uncontrolled Component</h1>
    <form action="" method="" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter user name"/>
        <br/>
        <br/>
        <input type="password"  id="password" placeholder="Enter password"/>
        <br/><br/>
        <button>
            Submit
        </button>
    
    </form>
    <hr/>

<h1>Uncontrolled component with useref</h1>
    <form action="" method="" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} placeholder="Enter user name"/>
        <br/>
        <br/>
        <input type="password"  ref={passwordRef} placeholder="Enter password"/>
        <br/><br/>
        <button>
            Submit Ref
        </button>
    
    </form>

    </>
    )
}
export default UncontrolledComponent;