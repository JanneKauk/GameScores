import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";


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
      <header className="App-header">
          Header
      </header>
    </div>
  );
}

export default App;
