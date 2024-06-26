import React, { useEffect, useState } from 'react';
import { CardContainer, CardFrame, ClanLogo, Credits, CustomizeContainer, Fundo, LegendImage, PlayerInfo, ProjectTitle, Select, SplashArt } from "./styles";

import blackBG from '../../assets/cardBG/black.png';
import greenBG from '../../assets/cardBG/green.png';
import orangeBG from '../../assets/cardBG/orange.png';
import purpleBG from '../../assets/cardBG/purple.png';
import redBG from '../../assets/cardBG/red.png';
import yellowBG from '../../assets/cardBG/yellow.png';
import blueBG from '../../assets/cardBG/blue.png';
import cyanBG from '../../assets/cardBG/cyan.png';
import whiteBG from '../../assets/cardBG/white.png';
import pinkBG from '../../assets/cardBG/pink.png';
import brownBG from '../../assets/cardBG/brown.png';

import f_bichos from '../../assets/frame/bichos.png';

interface Legend {
    name: string;
    splash_art: string;
    skins: Skin[];
}

interface Skin {
    name: string;
    colors: {
        [key: string]: string;
    };
}

interface Color {
    name: string;
    background: string;
    "box-color": string;
    "box-shadow": string;
}

export const Card = () => {
    const [legends, setLegends] = useState<Legend[]>([]);
    const [currentColor, setCurrentColor] = useState('black');

    const [boxColor, setBoxColor] = useState('rgba(63, 8, 8, 0.8)');
    const [boxShadow, setBoxShadow] = useState('rgba(124, 124, 124, 0.8)');

    const [currentBG, setCurrentBG] = useState(blackBG);
    const [splashArt, setSplashArt] = useState('');
    const [legendImage, setLegendImage] = useState('');
    const [selectedLegendIndex, setSelectedLegendIndex] = useState(0);
    const [selectedSkinIndex, setSelectedSkinIndex] = useState(0);

    const colors: Color[] = [
        {
            "name": "black",
            "background": blackBG,
            "box-color": "rgba(63, 8, 8, 0.8)",
            "box-shadow": "rgba(124, 124, 124, 0.8)"
        },
        {
            "name": "pink",
            "background": pinkBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "green",
            "background": greenBG,
            "box-color": "rgba(24, 51, 8, 0.8)",
            "box-shadow": "rgba(124, 124, 124, 0.8)"
        },
        {
            "name": "orange",
            "background": orangeBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "purple",
            "background": purpleBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "red",
            "background": redBG,
            "box-color": "rgba(209, 18, 18, 0.8)",
            "box-shadow": "rgba(177, 78, 78, 0.8)"
        },
        {
            "name": "yellow",
            "background": yellowBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "blue",
            "background": blueBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "cyan",
            "background": cyanBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "brown",
            "background": brownBG,
            "box-color": "",
            "box-shadow": ""
        },
        {
            "name": "white",
            "background": whiteBG,
            "box-color": "",
            "box-shadow": ""
        }
    ];

    function returnColorName(color: string){
        switch(color){
            case "black":
                return "Preto";
            case "pink":
                return "Rosa";
            case "green":
                return "Verde";
            case "orange":
                return "Laranja";
            case "purple":
                return "Roxo";
            case "red":
                return "Vermelho";
            case "yellow":
                return "Amarelo";
            case "blue":
                return "Azul";
            case "cyan":
                return "Ciano";
            case "brown":
                return "Marrom";
            case "white":
                return "Branco";
            default:
                return "???";
        }
    }

    
    const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(event.target.value);
        const selectedColor = colors[selectedIndex];
        setCurrentBG(selectedColor.background);
        setCurrentColor(selectedColor.name);
        setBoxColor(selectedColor["box-color"]);
        setBoxShadow(selectedColor["box-shadow"]);
        updateLegendImage(selectedLegendIndex, selectedSkinIndex, selectedColor.name);
    };

    const handleLegendChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(event.target.value);
        setSelectedLegendIndex(selectedIndex);
        setSelectedSkinIndex(0);
        updateLegendImage(selectedIndex, 0, currentColor);
        setSplashArt(legends[selectedIndex].splash_art);
    };

    const handleSkinChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = parseInt(event.target.value);
        setSelectedSkinIndex(selectedIndex);
        updateLegendImage(selectedLegendIndex, selectedIndex, currentColor);
    };

    const updateLegendImage = (legendIndex: number, skinIndex: number, color: string) => {
        const selectedLegend = legends[legendIndex];
        const selectedSkin = selectedLegend.skins[skinIndex];
        const imageUrl = selectedSkin.colors[color];
        setLegendImage(imageUrl || '');
    };

    useEffect(() => {
        const fetchLegendsData = async () => {
            try {
                const response = await fetch("https://api.npoint.io/61578546f86b58ee9377");
                const data = await response.json();
                setLegends(data.characters);
                if (data.characters.length > 0) {
                    setLegendImage(data.characters[0].skins[0].colors[currentColor]);
                    setSplashArt(data.characters[0].splash_art);
                }
            } catch (error) {
                console.error("Houve um erro ao obter os dados das lendas:", error);
            }
        };
        fetchLegendsData();
    }, [currentColor]);




    return (
        <>
            <CardContainer id="cardContainer">
                <CardFrame src={f_bichos}/>
                <LegendImage src={legendImage} />
                <PlayerInfo style={{ backgroundColor: boxColor, boxShadow: `0px 0px 10px ${boxShadow}` }}>
                    <h1>Nice Name</h1>
                    <h2 style={{ color: `${currentColor}` }}>Bichos do Mato</h2>
                </PlayerInfo>
                <ProjectTitle>
                    <h1>Coliseu de Clãs</h1>
                </ProjectTitle>
                <SplashArt src={splashArt} />
                <ClanLogo src={''} />
                <Credits style={{ backgroundColor: boxColor, boxShadow: `10px 0px 10px ${boxShadow}` }}>
                    <p>@NiceNameBH</p>
                    <p>@YaksaTH</p>
                    <p>@Codvox</p>
                </Credits>
                <Fundo src={currentBG} />
            </CardContainer>

            <CustomizeContainer>
                <Select onChange={handleTeamChange}>
                    {colors.map((color, index) => (
                        <option key={index} value={index}>{returnColorName(color.name)}</option>
                    ))}
                </Select>
                <Select onChange={handleLegendChange}>
                    {legends.map((legend, index) => (
                        <option key={index} value={index}>{legend.name.charAt(0).toUpperCase() + legend.name.slice(1)}</option>
                    ))}
                </Select>

                {legends.length > 0 && (
                    <Select onChange={handleSkinChange}>
                        {legends[selectedLegendIndex].skins.map((skin, index) => (
                            <option key={index} value={index}>{skin.name === "default" ? "Padrão" : skin.name}</option>
                        ))}
                    </Select>
                )}

                <button>Baixar Carta</button>
            </CustomizeContainer>
        </>
    );
};
