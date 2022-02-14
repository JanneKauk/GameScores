import React from "react";
import '../circleFill.css';
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

const Div: React.FC<IProps> = ({game}): JSX.Element => {
    return (
        <div className="container" style={{"width":"50%", margin:"0 0 0 2rem"}}>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="progress blue">
                        <span className="progress-left">
                            <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                            <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">{game.OverallScore}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Div
