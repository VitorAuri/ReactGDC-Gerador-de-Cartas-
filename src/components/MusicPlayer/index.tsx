import { ArrowFatLineLeft, ArrowFatLineRight, Pause, Play } from 'phosphor-react';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import { MusicContainer, OptionsContainer, SongName, VolumeContainer } from './styles';

export const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5); // Volume inicial, de 0.0 a 1.0

    const musicPlaylist = [
        {
            name: "Brawlhalla - Classic Main Menu Theme",
            url: "https://www.youtube.com/watch?v=D8z961xtHIk"
        },
        {
            name: "Brawlhalla Synthwave - Season 2 (Main Menu Theme)",
            url: "https://youtu.be/BwIeNde7Jk0?si=d7M9DO8dCyG4B16G"
        },
        {
            name: "Brawlhalla - Sun Drive",
            url: "https://youtu.be/UgmrXBLhls0?si=iYYIJMgvpEXITh6D"
        },
        {
            name: "Brawlhalla - Tekken Brawl",
            url: "https://youtu.be/SqX6z-YJ0bI?si=58JTyPx457-jYKt4"
        },
        {
            name: "Brawlhalla - World's End",
            url: "https://youtu.be/XbTYGnM2yIs?si=M4PJKPhY9zfOQF0D"
        },
        {
            name: "Brawlhalla - Miami Dome",
            url: "https://youtu.be/-deESm5Eo90?si=4WstZflMO9BNUBfl"
        }
    ];

    const [songIndex, setSongIndex] = useState(0);

    const currentSong = musicPlaylist[songIndex].url;
    const currentSongName = musicPlaylist[songIndex].name;

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    const handleNextSong = () => {
        if (songIndex === musicPlaylist.length - 1) {
            setSongIndex(0);
        } else {
            setSongIndex(songIndex + 1);
        }
    };

    const handlePreviousSong = () => {
        if (songIndex === 0) {
            setSongIndex(musicPlaylist.length - 1);
        } else {
            setSongIndex(songIndex - 1);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(e.target.value));
    };

    return (
        <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 1000 }}>
            <ReactPlayer
                url={currentSong}
                playing={playing}
                controls={false}
                width="0"
                height="0"
                loop={true}
                volume={volume}
            />
            <MusicContainer>
                <SongName>{currentSongName}</SongName>
                <OptionsContainer>
                    <button onClick={handlePreviousSong}>
                        Voltar
                        <ArrowFatLineLeft size={20} />
                    </button>
                    <button onClick={handlePlayPause}>
                        {playing ? 'Pausar Música' : 'Próxima Música'}
                        {playing ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button onClick={handleNextSong}>
                        Próxima Música
                        <ArrowFatLineRight size={20} />
                    </button>
                </OptionsContainer>
                <VolumeContainer>
                    <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>
                    <input
                        id="volume"
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        style={{
                            '--slider-percent': `${volume * 100}%`
                        }}
                    />
                </VolumeContainer>
            </MusicContainer>
        </div>
    );
}
