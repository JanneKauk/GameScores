import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from "axios";
import styles from './App.module.css';
import {Header} from "./Layout/Header";
import {GameDetails} from "./pages/game/GameDetails";

interface Game {
    id: string;
    title: string;
    Description: string;
}

function App() {
    const [games, setGames] = useState<Game[]>([]);

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
            <Route path='/asd' element={<ul>{games!.map(game => <li key={game.id}>Title: {game.title} / Description: {game.Description} </li> )}</ul>} />
            <Route path='/gamedetails/:id' element={<GameDetails title="Game Details" />} />
        </Routes>
    </div>
  );
}

export default App;
