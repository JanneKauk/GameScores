import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {BaseCard} from "../../components/BaseCard";

import styles from './GameDetails.module.css';

interface GameDetailsProps {
    title: string;
}

interface Game {
    id: number;
    title: string;
    Description: string;
    ReleaseDate: Date;
    OverallScore: number | null;
    imagesId: number;
}


export const GameDetails = ({title}: GameDetailsProps) => {
    const [game, setGame] = useState<Game>();
    const parameter = useParams();
    console.log(parameter);
    useEffect(() => {
        axios.get(`http://localhost:3001/games/${parameter.id}`).then(response => {
            console.log(response.data);
            setGame(response.data);
        })
    }, [])

    return (
        <section className={styles.main}>
            <div className={styles.main_title} >{title}</div>
            {game && <BaseCard gameDetails={game}  />}
        </section>
    )


}