import styled, { createGlobalStyle } from "styled-components";
import bg from '../assets/bg.png'

export const GlobalStyle = createGlobalStyle`
:root {
    --preto: #1C1C1C;
    --preto-escuro: #111111;
    --cinza: #474350;
    --amarelo: #FFC857;
    --branco: #F4F7F5;

    --card-font: "Barlow", sans-serif;;
    --site-font: Outfit, sans-serif, monospace;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
export const MainContainer = styled.div`
position: relative;
`
export const CardCentralizer = styled.main`
margin-top: 20px;
display: grid;
place-content: center;
`
export const WebBackground = styled.img`
position: absolute;
background-image: ${bg};
width: 100%;
top: 0;
object-fit: cover;
background-size: cover;
z-index: -5;
`