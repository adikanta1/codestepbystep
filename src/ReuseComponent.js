import UserReuseComponent from "./UserReuseComponent"

function ReuseComponent(){
 
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
            {
                userData.map((item)=><UserReuseComponent user = {item}/>)
            }

        </div>
    )
}
export default ReuseComponent