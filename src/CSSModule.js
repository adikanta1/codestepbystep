import style from './css/cssModule.module.css'
const CSSModule=()=>{
    return(
    <>
    <div>
        <h1 className={style.heading}>User Profile</h1>
        <img className={style.img-style} src="https://tse4.mm.bing.net/th?id=OIP.CZzuTcfOb5jN5pbSrzEhzwHaEf&pid=Api&P=0&h=180" alt="Passport Image" ></img>
        <div>
            <h4> Adikanta Sahoo</h4>
            <p>Software Developer</p>
        </div>
        </div>
    </>
    )
}
export default CSSModule