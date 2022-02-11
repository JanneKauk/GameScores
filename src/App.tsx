import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from "axios";
import {Header} from "./Layout/Header";
import {GameDetails} from "./pages/game/GameDetails";
import List from "./components/GameList";


function App() {
    const [games, setGames] = useState<IGame["games"]>([
        {
            Id: 1,
            title: "Game title",
            platforms: "pc",
            imageUrl: "1",
            Description: "description",
            OverallScore: 9
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:3001/games').then(response => {
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
                <Route path='/' element={<List games={games}/>}/>
                <Route path='/gamedetails/:id' element={<GameDetails title="Game Details" />} />
            </Routes>
        </div>
    );
}

interface IGame {
    games: {
        Id: number;
        title: string;
        platforms: string;
        imageUrl: string;
        Description: string;
        OverallScore: number;
    }[]
}

export default App;
