import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import axios from "axios";
import {Header} from "./Layout/Header";
import {GameDetails} from "./pages/game/GameDetails";
import List from "./components/GameList";
import {game} from "./misc/interfaces";



function App() {
    const [games, setGames] = useState<Games["game"]>([]);
    const [page, SetPage] = useState<number>(1)
    const [gameCount, setCount] = useState<number>(0)

    useEffect(() => {
        axios.get('http://localhost:3001/games/everything/gameCount').then(response => {
            setCount(response.data);
        }
        ).catch(err => console.log(err.message))
        axios.get('http://localhost:3001/games/everything/'+ page).then(response => {
            setGames(response.data);
            console.log(page)
        }
        ).catch(err => console.log(err.message))
    }, [page])
    if(games != null) {
        console.log(games);
    }
    if(gameCount != 0){
        console.log("game count returns: "+gameCount)
    }
    if(games!.length > 0 && games!==null){
        return (
            <div className="App">
                <Header title="LOGO" />
                <Routes>
                    <Route path='/' element={<List games={games} setPage={SetPage} page={page} gameCount={gameCount}/>}/>
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
