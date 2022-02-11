import React from "react";

interface IProps {
    games: {
        Id: number;
        title: string;
        platforms: string;
        imageUrl: string;
        Description: string;
        OverallScore: number;
    }[]
}

const List: React.FC<IProps> = ({ games }) => {
    const renderList = (): JSX.Element[] => {
        return games.map(game => {
            return (
                <li>
                    <div>
                        <img src={game.imageUrl} alt={"Image of the game cover"}/>
                        <h2>{game.title}</h2>
                        <p>{game.platforms}</p>
                        <p>{game.Description}</p>
                        <div>{game.OverallScore}</div>
                    </div>
                </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List