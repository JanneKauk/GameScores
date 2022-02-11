import React from "react";
import '../GameList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Div from "./ScoreCircle";

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
                <li className={'list-group-item d-flex justify-content-between'}>
                    <div style={{"display": "flex", "width": "100%"}}>
                        <img className="list-image" src={game.imageUrl} alt={"Image of the game cover"}/>
                        <div className="container">
                            <h5 className="align-left">
                                {game.title}<br/>
                                {game.platforms}
                            </h5>
                        </div>
                        <p className="align-left">{game.Description}</p>

                        {/*<span style={{"float": "right", "width": "50%" , "margin":"auto"}}>{game.OverallScore}</span>*/}
                        <Div OverallScore={game.OverallScore}/>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className="gamelist-container">
            <div className="container">
                <ul className="list-group">
                    {renderList()}
                </ul>
            </div>
        </div>
    )
}

export default List

