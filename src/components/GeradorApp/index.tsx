import { CardContainer, ClanLogo, Credits, Fundo, LegendImage, LegendName, PlayerName, SplashArt } from "./styles";
import { useEffect, useState } from 'react';

import black from '../../assets/cardBG/black.png';
import green from '../../assets/cardBG/green.png';
import orange from '../../assets/cardBG/orange.png';
import purple from '../../assets/cardBG/purple.png';
import red from '../../assets/cardBG/red.png';
import base from '../../assets/cardBG/base.png';
import yellow from '../../assets/cardBG/yellow.png';
import { BarStats } from "../BarStats";


export const GeradorApp = () => {
    const [legend, setLegend] = useState('');
    const [splashArt, setSplashArt] = useState('');
    const [clan, setClan] = useState('');

    const colors = [black, green, orange, purple, red, yellow, base]

    useEffect(() => {
        async function fetchLegendsData() {
            try {
                const response = await fetch("https://api.npoint.io/61578546f86b58ee9377");
                const data = await response.json();
                console.log(data['characters'][0].skins[0].colors['red']);
                setLegend(data['characters'][0].skins[2].colors['red']);
                setSplashArt(data['characters'][0].splash_art)
            }
            catch (error) {
                console.error("Hove um erro ao conseguir a imagem da lenda: " + error);
            }
        }
        fetchLegendsData();
    }, []);
    useEffect(() => {
        async function fetchClansData() {
            try {
                const response = await fetch("https://api.npoint.io/6488fb58f82a76e31664");
                const data = await response.json();
                console.log(data['clans'][0].logo);
                setClan(data['clans'][0].logo);
            }
            catch (error) {
                console.error("Houve um erro ao conseguir info dos clãs: " + error);
            }
        }
        fetchClansData();
    }, []);
    return (
        <>
            <CardContainer>
                <LegendImage src={`${legend}`} />
                <PlayerName style={{ backgroundColor: 'rgba(209, 18, 18, 0.8)', boxShadow: `0px 0px 10px rgba(131, 0, 0, 0.8)` }}>
                    <h1>Nice Name</h1>
                </PlayerName>
                <SplashArt src={`${splashArt}`} />
                <ClanLogo src={`${clan}`} />
                {
                /*<PlayerStats style={{ backgroundColor: 'rgba(209, 18, 18, 0.8)', boxShadow: `0px 0px 10px rgba(131, 0, 0, 0.8)` }}>
                    <PlayerStatsContent>
                        <h1>Custo 60</h1>
                        <BarStats typeOfBar={"Força"} barras={6} />
                        <BarStats typeOfBar={"Destreza"} barras={7} />
                        <BarStats typeOfBar={"Defesa"} barras={3} />
                        <BarStats typeOfBar={"Agilidade"} barras={6} />
                    </PlayerStatsContent>
                </PlayerStats>
                */}
                <LegendName style={{ backgroundColor: 'rgba(209, 18, 18, 0.8)', boxShadow: `0px 0px 10px rgba(131, 0, 0, 0.8)` }}>
                    <h1>Ada</h1>
                </LegendName>
                <Credits>
                    <p>@NiceNameBH</p>
                    <p>@YaksaTH</p>
                    <p>@Codvox</p>
                </Credits>
                <Fundo src={`${colors[4]}`} />
            </CardContainer>
        </>
    )
}