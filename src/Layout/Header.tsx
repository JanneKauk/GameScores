import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css';

interface HeaderProps {
    title: string;
}
export const Header = (props: HeaderProps) => {


    return (
        <header className="App-header">
            <NavLink className={styles.title} to="/">{props.title}</NavLink>
            <div className={styles.searchdiv} >
                <input type="search" />
            </div>
            <nav className={styles.nav}>
                <NavLink to="/asd">Login/Signup</NavLink>
                <NavLink to="/gamedetails/2">GameDetails</NavLink>
            </nav>
        </header>
    )
}