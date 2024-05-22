import { CardContainer, ClanLogo, ClanNameBox, Credits, CustomizeContainer, Fundo, LegendImage, LegendName, PlayerName, ProjectTitle, Select, SplashArt } from "./styles";
import { useEffect, useState } from 'react';

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

    const [legendName, setLegendName] = useState('Ada');
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
            "background": cyanBG,
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
        setLegendName(legends[selectedIndex].name)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <CardContainer>
                <LegendImage src={legendImage} />
                <PlayerName style={{ backgroundColor: boxColor, boxShadow: `0px 0px 10px ${boxShadow}` }}>
                    <h1>Nice Name</h1>
                </PlayerName>
                <ClanNameBox style={{ backgroundColor: boxColor, boxShadow: `0px 0px 0px ${boxShadow}` }}>
                    <h1 style={{ color: `${currentColor}` }}>Bichos do Mato</h1>
                </ClanNameBox>
                <ProjectTitle>
                    <h1>Coliseu de Clãs</h1>
                </ProjectTitle>
                <SplashArt src={splashArt} />
                <ClanLogo src={''} />
                <LegendName style={{ backgroundColor: boxColor, boxShadow: `0px 0px 10px ${boxShadow}` }}>
                    <h1>{legendName.charAt(0).toUpperCase() + legendName.slice(1)}</h1>
                </LegendName>
                <Credits>
                    <p>@NiceNameBH</p>
                    <p>@YaksaTH</p>
                    <p>@Codvox</p>
                </Credits>
                <Fundo src={currentBG} />
            </CardContainer>

            <CustomizeContainer>
                <Select onChange={handleTeamChange}>
                    {colors.map((color, index) => (
                        <option key={index} value={index}>{color.name}</option>
                    ))}
                </Select>
                <Select onChange={handleLegendChange}>
                    {legends.map((legend, index) => (
                        <option key={index} value={index}>{legend.name === "default" ? "Padrão":legend.name.charAt(0).toUpperCase() + legend.name.slice(1)}</option>
                    ))}
                </Select>

                {legends.length > 0 && (
                    <Select onChange={handleSkinChange}>
                        {legends[selectedLegendIndex].skins.map((skin, index) => (
                            <option key={index} value={index}>{skin.name}</option>
                        ))}
                    </Select>
                )}
            </CustomizeContainer>
        </>
    );
};
