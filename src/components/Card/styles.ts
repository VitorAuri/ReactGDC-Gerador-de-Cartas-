import styled from "styled-components";

const CardHeight = 450;
const CardWidth = 350;
export const CardContainer = styled.div`
*{
    font-family: "Barlow", sans-serif;
}
position: relative;
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
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 200px;
object-fit: cover;
background-size: cover;
z-index: 1;
`
export const ClanNameBox = styled.div`
position: absolute;
top: 20%;
left: 50%;
transform: translate(-50%, -50%);
width: 80%;
font-size: 12px;
text-align: center;
border-radius: 10px;
z-index: 3;
`
export const ProjectTitle = styled.div`
position: absolute;
top: 94%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
text-align: center;
width: 100%;
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
top: 85%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 3;
height: 40px;
font-size: 13px;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
border-radius: 10px;
width: 60%;
color: white;
`
export const PlayerName = styled.div`
position: absolute;
top: 12%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
width: 90%;
font-size: 14px;
z-index: 2;
border-radius: 10px;
text-align: center;
`
export const PlayerStats = styled.div`
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
top: 5%;
left: 50%;
transform: translate(-50%, -50%);
font-weight: bold;
font-size: 12px;
p{
    margin: 0px 10px;
}
`
export const CustomizeContainer = styled.div`
display: grid;
place-content: center;
align-items: center;
`
export const Select = styled.select`
width: 150px;
margin-top: 5px;
text-align: center;
`
