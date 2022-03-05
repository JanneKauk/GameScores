import React from "react";
import '../css/GameList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScoreCircle from "./ScoreCircle";
import {game} from "../misc/interfaces";
import Pagination from "./Pagination";
// import styles = module


// @ts-ignore
const List = ({games: game, setPage, page, gameCount}) => {
    const gamesPerPage = 20

    const renderList = (): JSX.Element[] => {
        return game.map((game: game) => {
            return (
                <li key={game.Id} className={'list-group-item d-flex justify-content-between'} style={{maxHeight:"12rem"}}>
                    <div style={{"display": "flex", "width": "100%"}}>
                        <img className="list-image" src={game.images.URL} alt={"Image of the game cover"}/>
                        <div className={"container d-flex col-3"}>
                            <div className="container" style={{padding: "0 0 0 0"}}>
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
                        <div className="container d-flex col-6">
                            <p className="align-left hidden-text">{game.Description}</p>
                        </div>
                        <ScoreCircle game={game}/>
                    </div>
                </li>
            )
        })
    }
    return (
        <div className="gamelist-container">
            <div className="container">
                <Pagination pages={Math.ceil(gameCount/gamesPerPage)} setPage={setPage} page={page}/>
                <ul className="list-group">
                    {renderList()}
                </ul>
                <Pagination pages={Math.ceil(gameCount/gamesPerPage)} setPage={setPage} page={page}/>
            </div>
        </div>
    )
}

export default List

