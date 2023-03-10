import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import axios from "axios";
import {Header} from "./Layout/Header";
import {GameDetails} from "./pages/game/GameDetails";
import List from "./components/GameList";
import {game} from "./misc/interfaces";


/** App
 * @constructor
 * @author Jani Peltonen, Janne Kaukua
 */
function App() {
    const [games, setGames] = useState<Games["game"]>([]);
    const [page, SetPage] = useState<number>(1)
    const [gameCount, setCount] = useState<number>(0)
    const [username, setUsername] = useState<string>('');
    const [filteredGames, setFilteredGames] = useState<Games["game"]>([]);

    const loggedinHandler = (name: string) => {
        setUsername(name);
    }

    useEffect(() => {
        if(sessionStorage.getItem('username')) {
            setUsername(sessionStorage.getItem('username')!);
        }
        axios.get('http://localhost:3001/games/everything/gameCount').then(response => {
            setCount(response.data);
        }
        ).catch(err => console.log(err.message))
        axios.get('http://localhost:3001/games/everything/'+ page).then(response => {
            setGames(response.data);
            setFilteredGames(response.data);
            console.log(page)
        }
        ).catch(err => console.log(err.message))
    }, [page])
    if(games != null) {
        console.log(games);
    }
    const filterHandler = (search: string) => {
        const filter = games.filter(game => {
            if(game.title.includes(search)) {
                return true;
            } else {
                return false;
            }
        })
        console.log(filter);
        // console.log(filteredGames + " search " + search);
        if(filteredGames.length === 0) {
            setFilteredGames(filter);
            return;
        }
          setFilteredGames(filter);

    }
    if(gameCount != 0){
        console.log("game count returns: "+gameCount)
    }
    if(games!.length > 0 && games!==null && filteredGames.length > 0){
        return (
            <div className="App">
                <Header title="LOGO" username={username} filterHandler={filterHandler} loggedinHandler={loggedinHandler}  />
                <Routes>
                    <Route path='/' element={<List games={filteredGames} setPage={SetPage} page={page} gameCount={gameCount}/>}/>
                    <Route path='/gamedetails/:id' element={<GameDetails />} />
                </Routes>
            </div>
        );
    }
    return  <div className="App">
        <Header title="LOGO" username={username} filterHandler={filterHandler} loggedinHandler={loggedinHandler}  />
        <Routes>
            {/*<Route path='/' element={<List games={games} setPage={SetPage} page={page} gameCount={gameCount}/>}/>*/}
            <Route path='/gamedetails/:id' element={<GameDetails />} />
        </Routes>
    </div>
}

interface Games {
    game: game[]
}


export default App;
