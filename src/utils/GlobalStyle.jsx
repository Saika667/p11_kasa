import { createGlobalStyle } from "styled-components"
import Montserrat from "../assets/font/Montserrat/montserrat.ttf"

const StyledGlobalStyle = createGlobalStyle`
    :root {
        font-size: 14px;
    }
    body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        background-color: #ffffff;
        height: 100vh;
        --color-red: #FF6060;
        --color-white: #ffffff;
        --color-black: #000000;
        --color-light-gray: #F6F6F6;
    }

    @font-face {
        font-family: 'Montserrat';
        src: url(${ Montserrat }) format("truetype");
    }
`

function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle