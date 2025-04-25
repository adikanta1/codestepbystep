import College from "./College";

const ArrayNestedLoop = () => {

    const collegeData = [
        {
            name: "IIT",
            city: "Delhi",
            students: [
                {
                    name: "A",
                    age: 29,
                    email: "a@test.comll"
                },
                {
                    name: "B",
                    age: 19,
                    email: "b@test.comll"
                },
                {
                    name: "C",
                    age: 39,
                    email: "c@test.comll"
                }

            ]
        },
        {
            name: "NIT",
            city: "Kolkata",
            students: [
                {
                    name: "A",
                    age: 29,
                    email: "a@test.comll"
                },
                {
                    name: "B",
                    age: 19,
                    email: "b@test.comll"
                },
                {
                    name: "C",
                    age: 39,
                    email: "c@test.comll"
                }

            ]
        },
        {
            name: "ITER",
            city: "BBSR",
            students: [
                {
                    name: "A",
                    age: 29,
                    email: "a@test.comll"
                },
                {
                    name: "B",
                    age: 19,
                    email: "b@test.comll"
                },
                {
                    name: "C",
                    age: 39,
                    email: "c@test.comll"
                }

            ]
        },
        {
            name: "ITER",
            city: "BBSR",
            students: [
                {
                    name: "A",
                    age: 29,
                    email: "a@test.comll"
                },
                {
                    name: "B",
                    age: 19,
                    email: "b@test.comll"
                },
                {
                    name: "C",
                    age: 39,
                    email: "c@test.comll"
                }

            ]
        }
    ]
    return (
        <>
            {collegeData.map((college,index)=>
                <div key={index}>
                    <College college={college}/>
                </div>
            )}
        </>
    )
}
export default ArrayNestedLoop;