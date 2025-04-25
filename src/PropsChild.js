
function PropsChild({user}){
    let name = "Adikanta"
    return(
        <div>
            <h1>Child name is : {user.name}, age is {user.age}</h1>
        </div>
    )
}
export default PropsChild;