
import styles from "../../css/AddReview.module.css";
import React, {useState} from "react";
import axios from "axios";

interface AddReviewProps {
    gameId: number;
}

interface IReview {
    ReviewTitle: string;
    ReviewText: string;
    ReviewScore: number;
    userId: number;
    gameId: number;
}

export const AddReview = ({gameId}: AddReviewProps) => {
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const token: string =  sessionStorage!.getItem('token')!;

        console.log(title, "and", text);
        console.log("gameid " + gameId)
        console.log(token);
        const rew: IReview = {
            ReviewTitle: title,
            ReviewText: text,
            ReviewScore: 9,
            userId: 3,
            gameId: gameId,
        }
        console.log(rew);
        axios.post('http://localhost:3001/games/addreview', rew,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        ).then((response) => {
                console.log(response);
                setTitle('');
                setText('');
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <section className={styles.card}>
            <h5>
                Add a review
            </h5>
            <form className={styles.input} onSubmit={submitForm}>
                <input type="search" onChange={e => setTitle(e.target.value)} />
                <textarea onChange={e => setText(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </section>
    )
}