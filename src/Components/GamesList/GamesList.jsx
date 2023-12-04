import { useEffect, useState } from "react";
import axios from "axios";
import "./GamesList.css";

import SortBy from "../SortBy/SortBy";
import RemoveGame from "../RemoveGame/RemoveGame";
import NotesPopup from "../NotesPopup/NotesPopup";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";

function GamesList() {
  const [games, setGames] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("hours");
  const [sortOrder, setSortOrder] = useState("desc");
  const [newNotes, setNewNotes] = useState("");

  const fetchGames = async () => {
    try {
      const response = await axios.get("/games");

      setGames(response.data);
    } catch (error) {
      console.log("Error fetching games:", error);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  const sortedGames = games.sort((a, b) => {
    // Sort based on criteria and order
    if (sortCriteria === "name") {
      return sortOrder === "desc"
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title);
    } else if (sortCriteria === "hours") {
      return sortOrder === "asc" ? a.hours - b.hours : b.hours - a.hours;
    } else if (sortCriteria === "playing") {
      return sortOrder === "asc"
        ? a.playing - b.playing
        : b.playing - a.playing;
    }
    // Default, no sorting
    return;
  });

  return (
    <div className="games-container">
      <h2 className="games-header">Games</h2>

      <SortBy
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Games list */}
      {games.length === 0
        ? "No Games Found"
        : sortedGames.map((game) => (
            <div key={game.id} className="item-container">
              <div className="title">
                <span className="game-title">{game.title}</span>
              </div>

              <ul className="games-list">
                <li>
                  <NotesPopup 
                    fetchGames={fetchGames} 
                    game={game}
                    newNotes={newNotes}
                    setNewNotes={setNewNotes}
                  />
                  {game.hours} hours &nbsp;
                  <br />

                  <div className="bottom-row">
                    <CurrentlyPlaying 
                      game={game} 
                      fetchGames={fetchGames} 
                    />
                    <RemoveGame 
                      game={game} 
                      setGames={setGames} 
                    />
                  </div>
                </li>
              </ul>
            </div>
      ))}
    </div>
  );
}

export default GamesList;
