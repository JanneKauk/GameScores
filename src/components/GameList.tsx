import React from "react";
import '../GameList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Div from "./ScoreCircle";

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
                <li key={game.Id} className={'list-group-item d-flex justify-content-between'}>
                    <div style={{"display": "flex", "width": "100%"}}>
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
                        <p className="align-left">{game.Description}</p>

                        {/*<span style={{"float": "right", "width": "50%" , "margin":"auto"}}>{game.OverallScore}</span>*/}
                        <Div game={game}/>
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

