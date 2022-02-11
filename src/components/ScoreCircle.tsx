import React from "react";
import '../circleFill.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IProps{
    OverallScore: number;
}

const Div: React.FC<IProps> = ({OverallScore}): JSX.Element => {
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
                        <div className="progress-value">{OverallScore}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Div
