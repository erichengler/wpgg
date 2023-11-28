import { useEffect, useState } from "react";
import axios from "axios";
import './GamesList.css';

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get('/games');

        setGames(response.data);
      } catch (error) {
        console.log('Error fetching games:', error);
      }
    }

    fetchGames();
  }, []);

  return (
    <div>
      <h2>Games Owned:</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default GamesList;
