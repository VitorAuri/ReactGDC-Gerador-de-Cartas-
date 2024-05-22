import { Card } from "./components/Card"
import { MusicPlayer } from "./components/MusicPlayer"
import { CardCentralizer, GlobalStyle, WebBackground } from "./styles/globalStyle"
import bg from './assets/bg.png'
export const App = () => {
    return (
        <>
            <WebBackground src={bg}/>
            <CardCentralizer>
                <Card />
            </CardCentralizer>
            <MusicPlayer />
            <GlobalStyle />
        </>
    )
}