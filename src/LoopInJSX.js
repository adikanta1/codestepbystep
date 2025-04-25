function LoopInJSX(){
 
    const userName=["A","B","C","D"]
    const collegeData=["IIT","NIT","ITER","KIIT"]

    function loopData(data){
        console.log("loop data 1 "+data.name)
    }

    const userData=[
        {
            name:"Anil",
            age:"29",
            email:"anil@test.com",
            id:1
        },
        {
            name:"Aril",
            age:"34",
            email:"aril@test.com",
            id:2
        },
        {
            name:"Arvi",
            age:"37",
            email:"arvi@test.com",
            id:3
        }
    ]
    return(
        <div>
            <h2>Loop in JSX with MAP functions</h2>

<table border="1">
    <thead>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
        </tr>
    </thead>
    <tbody>
        {userData.map((item)=>

            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
        </tr>
        )}
    </tbody>
</table>

<br/>
<br/>
<br/>

            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>name</td>
                        <td>Age</td>
                        <td>Email Id.</td>
                        </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anil</td>
                        <td>29</td>
                        <td>anil@test.com</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )
}
export default LoopInJSX