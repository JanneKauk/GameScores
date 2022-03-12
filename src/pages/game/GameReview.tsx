import {review} from "../../misc/interfaces";
import ScoreCircle from "../../components/ScoreCircle";
import React from "react";
import styles from "../../css/GameReview.module.css";

interface GameReviewProps {
    review: review;
}

export const GameReview = ({review}: GameReviewProps) => {

    return (
        <li className={'list-group-item d-flex justify-content-evenly mt-3 mb-3 box-shadow: 0 0 4px 0 #989898;'} style={{minHeight:"12rem", width: "70vw"}}>
                <div className={styles.reviewCard} style={{boxShadow:"none", padding:"2rem"}}>
                    <div>
                        <h2 className="align-left">
                            {review.ReviewTitle}
                        </h2>
                        <p className="align-left">
                            {review.ReviewText}<br/>
                        </p>
                    </div>
                    <div className={'styles.above dfle'} >
                        <p className="align-left col-6 hidden-text w-25">{"Score " + review.ReviewScore}</p>
                        <div className={styles.userinfo} >
                            <h5>
                                {review.username}
                            </h5>
                            <span>20.02.2022</span>
                        </div>
                    </div>
                </div>
            {/*<div key={review.id} style={{"display": "flex", "flexDirection": "row", "width": "70vw"}}>*/}
            {/*    /!*<ScoreCircle game={game}/>*!/*/}
            {/*</div>*/}
        </li>

    )
}