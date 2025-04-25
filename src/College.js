import Students from "./Students";

const College=({college}) => {
    return (
        <div style={{backgroundColor:"brown",padding:"20px",borderBottom:"2px solid #000",margin:"10px",borderRadius:"10px"}}>
            <h1>Name : {college.name}</h1>
            <ul>
                <li>
                    City : {college.name}
                </li>
                    {college.students.map((student)=><Students data={student}/>)}
            </ul>
        </div>
    )
}
export default College;