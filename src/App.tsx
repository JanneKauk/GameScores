import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from "axios";
import {Header} from "./Layout/Header";
import {GameDetails} from "./pages/game/GameDetails";
import List from "./components/GameList";


function App() {
    const [games, setGames] = useState<Games["game"]>([
    ]);

    useEffect(() => {
        axios.get('http://localhost:3001/games/everything').then(response => {
                setGames(response.data);
            }
        ).catch(err => console.log(err.message))
    }, [])
    if(games != null) {
        console.log(games);
    }
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

interface Games {
    game: {
        Id: number;
        title: string;
        platforms: plat[];
        images: image;
        Description: string;
        OverallScore: number;
    }[]
}

interface plat {
    Id: number;
    Name: string;

}

interface image {
    Id: number;
    URL: string;
}

export default App;
