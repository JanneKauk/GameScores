import React, {useLayoutEffect, useRef} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../css/Header.module.css";
import CSS from "csstype";

const LoginMenu = (): JSX.Element => {
    return (
        <div className={styles.loginMenu} style={divStyle}>
            <h4 style={{margin: "1rem 0 0 0"}}>Login</h4>
            <div style={{margin: "0.5rem 0 1.5rem 0", display: "grid"}}>
                <label style={{textAlign:"left"}}>Username</label>
                <input type={"text"} placeholder="ILikeTrains58"/><br/>
                <label style={{textAlign:"left", margin:"0.5rem 0 0 0"}}>Password</label>
                <input type="password" placeholder="Something123"/>
            </div>
            <div style={{width: "100%", display: "flex"}}>
                <button type="button" className="btn btn-danger" style={{float: "left"}}>Submit</button>
                <button type="button" className={styles.buttonLink}>Signup for a new account</button>
            </div>
        </div>
    )
}
const divStyle: CSS.Properties = {
    color: "#FF3A52",
    position: "absolute",
    right: "1rem",
    zIndex: 10,
    padding: "0 2rem 2rem 2rem"
}
export default LoginMenu
