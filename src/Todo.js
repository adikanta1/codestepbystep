function ToDo(){

    function calFun(){
        alert(" Alert function called")
    }
    return(
        <div>
            <h1>Adikanta Sahoo</h1>
            <img
            src="https://images6.alphacoders.com/678/678636.jpg"
            alt="Anil Sidhu"/>


            <ul>
                <li>Invent new Traffic light</li>
                <li>Rehearse a movie sceen</li>
                <li>Improve the spectrum technology</li>
            </ul>

            <button onClick={calFun}>Click Me</button>
        </div>
    )
}

export default ToDo;