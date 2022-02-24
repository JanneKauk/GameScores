import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from "axios";
import {Header} from "./Layout/Header";
import {GameDetails} from "./pages/game/GameDetails";
import List from "./components/GameList";
import {game} from "./misc/interfaces";


function App() {
    const [games, setGames] = useState<Games["game"]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/games/everything').then(response => {
                setGames(response.data);
            }
        ).catch(err => console.log(err.message))
    }, [])
    if(games != null) {
        console.log(games);
    }
    if(games!.length > 0 && games!==null){
        return (
            <div className="App">
                <Header title="LOGO" />
                <Routes>
                    <Route path='/' element={<List game={games}/>}/>
                    <Route path='/gamedetails/:id' element={<GameDetails title="Game Details" />} />
                </Routes>
            </div>
        );
    }
    return <div>a</div>;
}

interface Games {
    game: game[]
}


export default App;
