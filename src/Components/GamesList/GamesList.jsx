import { useEffect, useState } from "react";
import axios from "axios";
import "./GamesList.css";

function GamesList() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("/games");

        setGames(response.data);
      } catch (error) {
        console.log("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="games-container">
      <h2 className="games-header">Games</h2>
      <div className="filter">
        <span className="filter-by">Name </span> | &nbsp;
        <span className="filter-by">Hours </span> | &nbsp;
        <span className="filter-by">Currently Playing</span>
      </div>
      {games.length === 0
        ? "No Games Found"
        : games.map((game) => (
            <div key={game.id} className="item-container">
              <ul className="games-list">
                <li className="game-title">{game.title}</li>
                <li>
                  {game.hours} hours &nbsp;
                  <button className="notes">View Notes</button>
                  <br />
                  {game.playing
                    ? `✔ Currently Playing`
                    : `❌ Not Currently Playing`}
                </li>
              </ul>
            </div>
          ))}
    </div>
  );
}

export default GamesList;
