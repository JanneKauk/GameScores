import styles from './BaseCard.module.css';
import React from "react";
import ScoreCircle from "./ScoreCircle";
import {game} from "../misc/interfaces";

interface BaseCardProps {
    game: game
}


export const BaseCard = ({game}: BaseCardProps) => {

    console.log("Score.... = " + game.OverallScore);
    return (
        <div className={styles.main}>
            <div className={styles.image}>
                <img className="list-image" src={game.images.URL} alt={"Image of the game cover"}/>
            </div>
            <div className={styles.details}>
                <h1>{game.title}</h1>

                <div>Platform: {game.platforms.map((platform) => {
                    if (game.platforms.slice(-1)[0].Name === platform.Name) {
                        return platform.Name
                    }
                    return platform.Name + ", "
                })}</div>
                <div>Released: {game.ReleaseDate}</div>
                <div>Summary<br/><p>{game.Description}</p></div>
            </div>
                <ScoreCircle game={game}/>


        </div>
    )
}