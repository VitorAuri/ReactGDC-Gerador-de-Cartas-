import styled, { createGlobalStyle } from "styled-components";
import bg from '../assets/bg.png'

export const GlobalStyle = createGlobalStyle`
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