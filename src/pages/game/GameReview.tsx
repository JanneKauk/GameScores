import {review} from "../../misc/interfaces";
import ScoreCircle from "../../components/ScoreCircle";
import React from "react";

interface GameReviewProps {
    review: review;
}

export const GameReview = ({review}: GameReviewProps) => {

    return (
        <li className={'list-group-item d-flex justify-content-between mt-5'} style={{maxHeight:"12rem"}}>
            <div key={review.id} style={{"display": "flex", "width": "100%"}}>
                <div className={"container d-flex col-3"}>
                    <div className="container">
                        <h1>
                            {review.ReviewTitle}
                        </h1>
                        <h5 className="align-left">
                            {review.ReviewText}<br/>
                        </h5>
                    </div>
                </div>
                <p className="align-left col-6 hidden-text">{review.ReviewScore}</p>
                {/*<ScoreCircle game={game}/>*/}
            </div>
        </li>

    )
}