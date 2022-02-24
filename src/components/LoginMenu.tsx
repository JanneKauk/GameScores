import React, {useLayoutEffect, useRef} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const LoginMenu = (): JSX.Element => {
    const ratingRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        console.log(ratingRef);
    })
    const renderMenu = (): JSX.Element => {
        return (
            <div className="container center ">
                <div className="rating" ref={ratingRef}>
                <span>

                </span>
                </div>
            </div>
        )
    }

    function adjustScore () {

    }

    useLayoutEffect(() => {
        adjustScore();
    })

    return (
        <div className={"col-2"}>
            {renderMenu}
        </div>
    )


}

export default LoginMenu
