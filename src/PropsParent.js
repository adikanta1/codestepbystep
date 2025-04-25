import PropsChild from "./PropsChild";
function PropsParent(){
    let name = "Adikanta"

    let userObj1 = {
        name:"Adikanta",
        age:34,
        email:"a@gmail.com"
    }
    let userObj2 = {
        name:"Sahoo",
        age:30,
        email:"a@gmail.com"
    }
    return(
        <div>
            <PropsChild user = {userObj1}/>
            <hr/>
            <PropsChild user = {userObj2}/>
        </div>
    )
}
export default PropsParent;