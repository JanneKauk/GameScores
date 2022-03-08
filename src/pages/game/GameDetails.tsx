import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {BaseCard} from "../../components/BaseCard";
import {game} from "../../misc/interfaces";
import {review} from "../../misc/interfaces";

import styles from './GameDetails.module.css';
import {GameReview} from "./GameReview";
import {AddReview} from "./AddReview";

interface GameDetailsProps {
    title: string;
}

interface Game {
    gameDetails: game

}

interface Review {
    review: review[]
}


export const GameDetails = ({title}: GameDetailsProps) => {
    const [game, setGame] = useState<Game["gameDetails"]>();
    const [reviews, setReviews] = useState<Review["review"]>();
    const parameter = useParams();
    console.log(parameter);
    useEffect(() => {
        axios.get(`http://localhost:3001/games/${parameter.id}`).then(response => {
            console.log("res reviews " + response.data);
            setGame(response.data);
        })

    }, [parameter.id])
    useEffect(() => {
        axios.get(`http://localhost:3001/games/reviews/${parameter.id}`).then(response => {
            console.log(response.data);
            setReviews(response.data);
        })
    }, [parameter.id])

    console.log("reviews here " + reviews);
    return (
        <section className={styles.main}>
            {/*<div className={styles.main_title} >{title}</div>*/}
            {game && <BaseCard game={game}  />}
            {game && <AddReview gameId={game!.Id}/>}
            {reviews && reviews.map(review => { return <GameReview key={review.id} review={review} />})}
        </section>
    )


}