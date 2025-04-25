import style, { styled } from "styled-components"
const StyleComponent = () => {

    // const Heading = styled.h1`
    // color:red;
    // border:1px solid green;
    // border-radius:5px;
    // margin:20px;
    // padding:10px;
    // `

    const Heading = styled.h1({
        color: "red",
        border: "1px solid green",
        borderRadius: '5px',
        margin: '20px',
        padding: '10px',
    })

    const StyleBt = styled.button`
    color:red
    `

    return (
        <>
            <h4> Adikanta Sahoo</h4>
            <Heading>Hello heading</Heading>
            <StyleBt>Logins</StyleBt>
        </>
    )
}
export default StyleComponent;