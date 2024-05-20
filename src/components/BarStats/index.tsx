import { BarFlex, BarType, Bar, BarStatsContainer } from "./style"

export const BarStats = ({ barras, typeOfBar }) => {
    return (
        <BarFlex>
            <BarType>
                <h1>
                    {typeOfBar}
                </h1>
            </BarType>
            <BarStatsContainer>

                {Array(barras).fill().map((index) => (
                    <Bar key={index} />
                ))}
            </BarStatsContainer>
        </BarFlex>
    );
}
