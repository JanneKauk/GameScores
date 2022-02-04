import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import axios from "axios";
import styles from './App.module.css';
import {Header} from "./Layout/Header";

interface Game {
    title: string;
    description: string;
}

function App() {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/games').then(response => {
            console.log("response");
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
            <Route path='/asd' element={<p>asd</p>} />
        </Routes>
    </div>
  );
}

export default App;
