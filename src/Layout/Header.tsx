import {NavLink} from "react-router-dom";
import styles from '../css/Header.module.css';
import CSS from 'csstype';
import React, {useState} from "react";
import LoginMenu from "../components/LoginMenu";

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
                {showMenu && <LoginMenu/>}
            </nav>
        </header>
    )
}

const buttStyle: CSS.Properties = {
    background:"none",
    border:"none",
    color:"#FF3A52",
    fontWeight: "bold"
}