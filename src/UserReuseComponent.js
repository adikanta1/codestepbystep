// 9769484243

const UserReuseComponent=({user})=>{
    return(
        <div style={{
            border:"1px solid green",
            padding:"10px",
            margin:"10px",
            width:"500px",
            borderRadius:"10px"
        }}>
            <h1>User Component : <span style={{color:'green'}}>{user.name}</span></h1>
            <h1>User Component : <span style={{color:'green'}}>{user.age}</span></h1>
            <h1>User Component : <span style={{color:'green'}}>{user.email}</span></h1>
        </div>
    )
}

export default UserReuseComponent;
