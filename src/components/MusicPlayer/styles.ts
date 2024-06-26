import styled from "styled-components";

export const MusicContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: var(--site-font);
`;

export const SongName = styled.div`
    width: 100%;
    text-align: center;
    position: absolute;
    top: -30%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--amarelo);
    text-shadow: 0px 0px 5px black;
`;

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        border-radius: 8px;
        background: var(--preto);
        color: var(--branco);
        border: 0px;
        margin: 0px 10px;
        transition: 0.5s;
        width: 110px;
        height: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover {
            background: var(--amarelo);
            color: var(--preto);
            cursor: pointer;
        }
    }
`;

export const VolumeContainer = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
    label {
        color: var(--amarelo);
        text-shadow: 0px 0px 5px black;
    }
    input[type="range"] {
        width: 100px;
        margin-left: 5px;
        -webkit-appearance: none;
        background: transparent;
        box-shadow: 0px 0px 5px black;

        &::-webkit-slider-runnable-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            border-radius:8px;
            background: linear-gradient(
                to right,
                var(--amarelo) 0%,
                var(--amarelo) var(--slider-percent),
                var(--cinza) var(--slider-percent),
                var(--cinza) 100%
            ); 
            
        }
        &::-webkit-slider-thumb {
            border: 1px solid var(--amarelo);
            height: 15px;
            width: 15px;
            border-radius: 50%; 
            background: var(--preto);
            cursor: pointer;
            -webkit-appearance: none;
            margin-top: -3.6px; 
        }
        &::-moz-range-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            background: linear-gradient(
                to right,
                var(--amarelo) 0%,
                var(--amarelo) var(--slider-percent),
                var(--cinza) var(--slider-percent),
                var(--cinza) 100%
            );
            border-radius: 1.3px;
        }
        &::-moz-range-thumb {
            border: 1px solid var(--amarelo);
            height: 15px;
            width: 15px;
            border-radius: 50%; 
            background: var(--preto);
            cursor: pointer;
        }
        &::-ms-track {
            width: 100%;
            height: 8.4px;
            cursor: pointer;
            background: transparent; 
            border-color: transparent;
            color: transparent;
        }
        &::-ms-fill-lower {
            background: var(--amarelo);
        }
        &::-ms-fill-upper {
            background: var(--cinza);
        }
        &::-ms-thumb {
            border: 1px solid var(--amarelo);
            height: 15px;
            width: 15px;
            border-radius: 50%; 
            background: var(--preto);
            cursor: pointer;
            margin-top: 0;
        }
    }
`;
