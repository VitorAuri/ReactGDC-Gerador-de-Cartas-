import styled from "styled-components";

const CardHeight = 450;
const CardWidth = 350;
export const CardContainer = styled.div`
position: relative;
display: flex;
width: ${CardWidth}px;
height: ${CardHeight}px;
border-radius: 20px;
overflow: hidden;
`
export const Fundo = styled.img`
position: absolute;
width: ${CardWidth}px;
height: ${CardHeight}px;
background-size: cover;
object-fit: cover;
filter: blur(2px);
z-index: -1;
`
export const LegendImage = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 200px;
object-fit: cover;
background-size: cover;
z-index: 2;
`
export const ClanLogo = styled.img`
position: absolute;
top: 55%;
left: 88%;
transform: translate(-50%, -50%);
width: 200px;
object-fit: cover;
background-size: cover;
z-index: 1;
`
export const SplashArt = styled.img`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 300px;
object-fit: cover;
background-size: cover;
z-index: 1;
opacity: 0.5;
filter: blur(1px);
filter: grayscale(100%);
`
export const LegendName = styled.div`
position: absolute;
font-family: Verdana, Geneva, Tahoma, sans-serif;
top: 85%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
width: 200px;
height: 50px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
border-radius: 20px;
color: white;
`
export const PlayerName = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
position: absolute;
top: 12%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
font-size: 10px;
z-index: 2;
width: 40%;
padding-left: 10px;
padding-right: 10px;
border-radius: 20px;
text-align: center;
font-family: "Barlow", sans-serif;
`
export const PlayerStats = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
position: absolute;
top: 58%;
left: 60%;
display: flex;
justify-content: space-evenly;
align-items: center;
transform: translate(-50%, -50%);
color: white;
font-size: 8px;
z-index: 2;
width: 180px;
border-radius: 20px;
font-family: "Barlow", sans-serif;
h1{
    text-align: center;
}
`
export const PlayerStatsContent = styled.div`
display: flex;
flex-direction: column;
`
export const Credits = styled.div`
position: absolute;
color: white;
display: flex;
top: 97%;
left: 50%;
transform: translate(-50%, -50%);
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: bold;
font-size: 12px;
p{
    margin: 0px 10px;
}
`
