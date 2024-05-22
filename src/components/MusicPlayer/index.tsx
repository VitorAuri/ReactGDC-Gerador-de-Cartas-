import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

export const MusicPlayer = () => {
    const [playing, setPlaying] = useState(false);

    const handlePlayPause = () => {
        setPlaying(!playing);
    };

    return (
        <div style={{ position: 'fixed', bottom: 10, right: 10, zIndex: 1000 }}>
            <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // URL do vídeo do YouTube
                playing={playing}
                controls={false}
                width="0"
                height="0"
                config={{
                    youtube: {
                        playerVars: { showinfo: 0, controls: 0 }
                    }
                }}
            />
            <button onClick={handlePlayPause} style={{ padding: '10px', fontSize: '16px' }}>
                {playing ? 'Pause Music' : 'Play Music'}
            </button>
        </div>
    );
}
