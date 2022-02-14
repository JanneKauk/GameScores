import React from "react";
import '../GameList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScoreCircle from "./ScoreCircle";

// interface IProps {
//     games: {
//         Id: number;
//         title: string;
//         platforms: string;
//         imageUrl: string;
//         Description: string;
//         OverallScore: number;
//     }[]
// }
interface Games {
    game: {
        Id: number;
        title: string;
        platforms: plat[];
        images: image;
        Description: string;
        OverallScore: number;
    }[]
}

interface plat {
    Id: number;
    Name: string;

}

interface image {
    Id: number;
    URL: string;
}

const List = ({game}: Games) => {
    const renderList = (): JSX.Element[] => {
        return game.map(game => {
            return (
                <li key={game.Id} className={'list-group-item d-flex justify-content-between'} style={{maxHeight:"12rem"}}>
                    <div style={{"display": "flex", "width": "100%"}}>
                        <div className={"container d-flex col-3"}>
                            <img className="list-image" src={game.images.URL} alt={"Image of the game cover"}/>
                            <div className="container">
                                <h5 className="align-left">
                                    {game.title}<br/>
                                    {game.platforms.map((platform) => {
                                        if (game.platforms.slice(-1)[0].Name === platform.Name) {
                                            return platform.Name
                                        }
                                        return platform.Name + ", "
                                    })}
                                </h5>
                            </div>
                        </div>
                        <p className="align-left col-6 hidden-text">{game.Description}</p>
                        <ScoreCircle game={game}/>
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

