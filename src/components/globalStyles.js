import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    .gameTitle{
        font-size: 2rem;
        text-align: center;
    }
    p{
        font-size: 1.2rem;
        margin: 2rem;
    }
`

export default GlobalStyles