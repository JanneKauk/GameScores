import React, {Fragment, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../css/Header.module.css";
import CSS from "csstype";
import axios from "axios";

interface LoginProps {
    loggedIn: (name: string) => void;
}

const LoginMenu = (props: LoginProps): JSX.Element => {
    const [register, setRegister] = useState(false);
    const onClick = () => {
        clean();
        setErrorMessage('');
        setRegister(!register)
    };
    const pFieldRef = useRef<HTMLInputElement>(null)
    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const usernameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const clean = () => {
        setUser('');
        setPassword('');
        setEmail('');
        setConfirmPassword('');
        if (emailRef.current !== null && usernameRef.current !== null && pFieldRef.current !== null && confirmPasswordRef.current !== null) {
            emailRef!.current!.value = '';
            usernameRef!.current!.value = '';
            pFieldRef!.current!.value = '';
            confirmPasswordRef!.current!.value = '';
        }
    }
    const login: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("form")
        setErrorMessage('');
        axios.post('http://localhost:3001/authentication/signin', {
                username: user,
                Password: password,
                Email: "placeholder"

            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,

            }
        )
            .then(response => {
                sessionStorage.setItem('token', response.data.accessToken);
                sessionStorage.setItem('username', user);
                props.loggedIn(user);
                // console.log(response)
            })
            .catch(err => {
                setErrorMessage("Failed to login");
                console.log(err.message)
            })
    }
    const registerHandler: React.FormEventHandler<HTMLFormElement> = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("form")
        console.log("email", email, "user", user, "password", password, "confirmPassword", confirmPassword);
        if (password.localeCompare(confirmPassword) === 0) {
            axios.post('http://localhost:3001/authentication/signup', {
                    username: user,
                    Password: password,
                    Email: email

                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,

                }
            )
                .then(response => {
                    // sessionStorage.setItem('token', response.data.accessToken);
                    // sessionStorage.setItem('username', user);
                    console.log(response)
                })
                .catch(err => console.log(err.message))
        }

    }
        const logoutHandler = () => {
            sessionStorage.removeItem('username');
            sessionStorage.removeItem('token')
        }
    if(sessionStorage.getItem('username')) {
        return (
            <div className={styles.loginMenu} style={divStyle}>
                <h4 style={{margin: "1rem 0 0 0"}}>{sessionStorage.getItem("username")}</h4>
                <div style={{width: "100%", display: "flex"}}>
                    <button type="button" className={styles.buttonLink} onClick={logoutHandler}>Logout</button>
                </div>
            </div>
        )


    }
    if (!register) {
        return (
            <div className={styles.loginMenu} style={divStyle}>
                <h4 style={{margin: "1rem 0 0 0"}}>Login</h4>
                <form onSubmit={login} style={{margin: "0.5rem 0 1.5rem 0", display: "grid"}}>
                    <label style={{textAlign: "left"}}>Username</label>
                    <input type={"text"} placeholder="ILikeTrains58" onChange={e => setUser(e.target.value)}
                           ref={usernameRef}/><br/>
                    <label style={{textAlign: "left", margin: "0.5rem 0 0 0"}}>Password</label>
                    <input type="password" placeholder="Something123" ref={pFieldRef}
                           onChange={e => setPassword(e.target.value)}/>
                    {errorMessage.length > 0 && <div>{errorMessage}</div>}
                    <button type="submit" className="btn btn-danger" style={{float: "left"}}>Submit</button>
                </form>
                <div style={{width: "100%", display: "flex"}}>
                    <button type="button" className={styles.buttonLink} onClick={onClick}>Signup for a new account
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.loginMenu} style={divStyle}>
                <h4 style={{margin: "1rem 0 0 0"}}>Register</h4>
                <form style={{margin: "0.5rem 0 1.5rem 0", display: "grid"}} onSubmit={registerHandler}>
                    <label style={{textAlign: "left"}}>Email</label>
                    <input type={"email"} placeholder="email" onChange={e => setEmail(e.target.value)}
                           ref={emailRef}/><br/>
                    <label style={{textAlign: "left"}}>Username</label>
                    <input type={"text"} placeholder="ILikeTrains58" onChange={e => setUser(e.target.value)}
                           ref={usernameRef}/><br/>
                    <label style={{textAlign: "left", margin: "0.5rem 0 0 0"}}>Password</label>
                    <input type="password" placeholder="Something123" onChange={e => setPassword(e.target.value)}
                           ref={pFieldRef}/>
                    <label style={{textAlign: "left", margin: "0.5rem 0 0 0"}}>Repeat password</label>
                    <input type="password" placeholder="Something123" onChange={e => setConfirmPassword(e.target.value)}
                           ref={confirmPasswordRef}/>
                    <div style={{width: "100%", display: "flex", margin: "1rem 0 0 0"}}>
                        <button type="submit" className="btn btn-danger" style={{float: "left"}}>Submit</button>
                        <button type="button" className={styles.buttonLink} onClick={onClick}>Already have an account?
                        </button>
                    </div>
                </form>
                {errorMessage.length > 0 && <div>{errorMessage}</div>}
            </div>
        )
    }
}
const divStyle: CSS.Properties = {
    color: "#FF3A52",
    position: "absolute",
    right: "1rem",
    zIndex: 10,
    padding: "0 2rem 2rem 2rem"
}
export default LoginMenu
