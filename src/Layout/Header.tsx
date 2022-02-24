import {NavLink} from "react-router-dom";
import styles from './Header.module.css';
import CSS from 'csstype';
import React, {useState} from "react";

interface HeaderProps {
    title: string;
}
export const Header = (props: HeaderProps) => {
    const [showMenu, setShow] = useState(false)
    const onClick = () => setShow(!showMenu)
    return (
        <header className="App-header">
            <NavLink className={styles.title} to="/">{props.title}</NavLink>
            <div className={styles.searchdiv} >
                <input type="search" />
            </div>
            <nav className={styles.nav}>
                <button style={buttStyle} onClick={onClick}>Login/Signup</button>
                {showMenu && <div className="list-group-item" style={divStyle}>
                    <h2>Login</h2>
                    <div>
                        <div>
                            <input type={"text"} placeholder="Username"/>
                        </div>
                        <div>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <div>
                            <button type="button" className="btn btn-danger">Submit</button>
                            <button type="button" className="btn">Signup for a new account</button>
                        </div>
                    </div>
                </div>}
            </nav>
        </header>
    )
}

const divStyle: CSS.Properties = {
    color: "#FF3A52",
    position: "absolute",
    right: "1rem",
    zIndex: 10,
    padding: "2rem"
}
const buttStyle: CSS.Properties = {
    background:"none",
    border:"none",
    color:"#FF3A52",
    fontWeight: "bold"
}