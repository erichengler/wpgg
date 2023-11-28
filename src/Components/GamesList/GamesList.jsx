import { useState } from "react";
import './GamesList.css';

function GamesList() {
  const [games, setGames] = useState([]);

  return (
    <div>
      <h2>Games Owned:</h2>
      <ul>
        {games.map((game) => (
          <li key={game.appid}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default GamesList;
