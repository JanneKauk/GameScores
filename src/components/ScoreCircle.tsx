import React from "react";
import '../scoreCircle.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface plat {
    Id: number;
    Name: string;

}

interface image {
    Id: number;
    URL: string;
}

interface IProps{
    game: {
        OverallScore: number;
        Id: number;
        title: string;
        platforms: plat[];
        images: image;
        Description: string;
    }
}

const ScoreCircle: React.FC<IProps> = ({game}): JSX.Element => {
    function adjustScore() {
        let temp;
        try {
            temp = document.getElementById("game.Id");
            // Get content and get score as an int
            let ratingContent = game.OverallScore;
            let ratingScore = ratingContent*10;

            // Define if the score is good, meh or bad according to its value
            let scoreClass = ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";

            // Add score class to the rating
            temp!.classList.add(scoreClass);

            // After adding the class, get its color
            const ratingColor = window.getComputedStyle(temp!).backgroundColor;

            // Define the background gradient according to the score and color
            const gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;

            // Set the gradient as the rating background
            temp!.setAttribute("style", gradient);

            // Wrap the content in a tag to show it above the pseudo element that masks the bar
            temp!.innerHTML = `${ratingScore}`;
        }catch (e){
            console.error(e);
            return;
        }
    }

    return (
        <div className="container center">
            <div id={"game.Id"} className="rating bad">
                <span>
                    {game.OverallScore}
                    {adjustScore()}
                </span>
            </div>
        </div>
    )
}

export default ScoreCircle
