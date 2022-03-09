import {NavLink} from "react-router-dom";
import styles from '../css/Header.module.css';
import CSS from 'csstype';
import React, {useState} from "react";
import LoginMenu from "../components/LoginMenu";

interface HeaderProps {
    title: string;
    username: string;
    filterHandler: (search: string) => void;
}
export const Header = (props: HeaderProps) => {
    const [showMenu, setShow] = useState(false)
    const onClick = () => setShow(!showMenu)
    const [search, setSearch] = useState<string>('');
    const filter = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        props.filterHandler(event.target.value);
    }

    return (
        <header className="App-header">
            <NavLink className={styles.title} to="/">{props.title}</NavLink>
            <div className={styles.searchdiv} >
                <input type="search" onChange={filter} />
            </div>
            <nav className={styles.nav} style={{margin:"0 1rem 0 0"}}>
                {props.username.length === 0 && <button style={buttStyle} onClick={onClick}>Login/Signup</button>}
                {props.username.length > 0 && <button style={buttStyle}>{props.username}</button>}
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