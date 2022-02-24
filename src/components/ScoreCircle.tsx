import React, {useLayoutEffect, useRef} from "react";
import '../css/scoreCircle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {game} from "../misc/interfaces";


interface IProps{
    game: game
}


const ScoreCircle: React.FC<IProps> = ({game}): JSX.Element => {
    const ratingRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        console.log(ratingRef);
    })
    const renderList = (): JSX.Element => {

        return (
            <div className="container d-flex center">
                <div className="rating" ref={ratingRef}>
                <span>
                    {game.OverallScore}
                    {/*{adjustScore()}*/}
                </span>
                </div>
            </div>
        )
    }

    function adjustScore () {
        console.log("Current ref = " + ratingRef!.current!.innerText);
        console.log(ratingRef);
        console.log("ei menty ohi")
        try {
            if(ratingRef.current!.innerText === ""+game.OverallScore) {


                // Get content and get score as an int
                let ratingContent = game.OverallScore;
                let ratingScore = ratingContent * 10;

                // Define if the score is good, meh or bad according to its value
                let scoreClass = ratingScore < 40 ? "bad" : ratingScore < 70 ? "meh" : "good";
                console.log(ratingScore);

                // Add score class to the rating
                ratingRef!.current!.classList.add(scoreClass);

                // After adding the class, get its color
                const ratingColor = window.getComputedStyle(ratingRef!.current!).backgroundColor;

                // Define the background gradient according to the score and color
                const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

                // Set the gradient as the rating background
                ratingRef!.current!.setAttribute("style", gradient);

                // Wrap the content in a tag to show it above the pseudo element that masks the bar
                ratingRef!.current!.innerHTML = `<span>${ratingScore}</span>`;
            }
        }catch (e){
            console.error(e);
            return;
        }
    }

    useLayoutEffect(() => {
        adjustScore();
    })

    return (
        <div className={"container d-flex col-2"}>
            {renderList()}
        </div>
    )


}

export default ScoreCircle
