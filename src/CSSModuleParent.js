import CSSModule from "./CSSModule"
import style from './css/cssModule.module.css'
const CSSModuleParent=()=>{
    return(
    <> 
        <h1 className={style.heading}> Style with CSS module in React Js</h1>
        <CSSModule/>
    </>
    )
}
export default CSSModuleParent