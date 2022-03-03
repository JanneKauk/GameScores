import React from "react";
import ScoreCircle from "./ScoreCircle";
import {game} from "../misc/interfaces";
import styles from '../css/BaseCard.module.css';


interface BaseCardProps {
    game: game
}


export const BaseCard = ({game}: BaseCardProps) => {

    console.log("Score.... = " + game.OverallScore);
    return (
        <section className={styles.main}>

            <div className={styles.main_details}>
                <div className={styles.image}>
                    <img className={styles.listimage} src={game.images.URL} alt={"Image of the game cover"}/>
                </div>
                <ScoreCircle game={game}/>
                <div className={styles.details}>
                    <h1 className={styles.title}>{game.title}</h1>

                    <div><span className={styles.platforms}>Platform:</span> {game.platforms.map((platform) => {
                        if (game.platforms.slice(-1)[0].Name === platform.Name) {
                            return platform.Name
                        }
                        return platform.Name + ", "
                    })}</div>
                    <div><span className={styles.release}>Released:</span> {game.ReleaseDate}</div>
                    <div><span className={styles.summary}>Summary</span><br/><p>{game.Description}</p></div>
                </div>
            </div>
            <div className={styles.video}>
                <iframe src="https://www.youtube.com/embed/watch?v=TULqXSuOqrg"/>

            </div>
        </section>
    )
}