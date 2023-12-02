import { useEffect, useState } from "react";
import axios from "axios";

import Popup from "reactjs-popup";
import trash_icon from "../../Assets/images/trash.png";
import "./GamesList.css";

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

  const handleSortBy = (criteria) => () => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

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

  const handleRemoveGame = async (gameId) => {
    try {
      // Delete request to remove game with specified id
      await axios.delete(`/games/${gameId}`);

      // Fetch updated game list
      const response = await axios.get("/games");
      setGames(response.data);
    } catch (error) {
      console.log("Error removing game:", error);
    }
  };

  const handleNotes = async (gameId) => {
    try {
      await axios.put(`/games/${gameId}`, { id: gameId, notes: newNotes });
    } catch (error) {
      console.log("Error updating notes:", error);
    }
    fetchGames();
  };

  return (
    <div className="games-container">
      <h2 className="games-header">Games</h2>

      {/* Sort by filter */}
      <div className="filter">
        <span className="filter-text" onClick={handleSortBy("name")}>
          Name {sortCriteria === "name" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>{" "}
        &nbsp;| &nbsp;
        <span className="filter-text" onClick={handleSortBy("hours")}>
          Hours {sortCriteria === "hours" && (sortOrder === "asc" ? "▲" : "▼")}
        </span>{" "}
        &nbsp;| &nbsp;
        <span className="filter-text" onClick={handleSortBy("playing")}>
          Currently Playing{" "}
          <span className={sortOrder === "asc" ? "filter-no" : "filter-yes"}>
            {sortCriteria === "playing" && (sortOrder === "asc" ? "❌" : "✔")}
          </span>
        </span>
      </div>

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
                  {/* Notes Popup */}
                  <Popup
                    trigger={<button className="notes-button">Notes</button>}
                    position="center"
                  >
                    {(close) => (
                      <div className="popup-div">
                        <textarea
                          className="popup-text"
                          defaultValue={game.notes}
                          onChange={(e) => setNewNotes(e.target.value)}
                        ></textarea>
                        <button
                          className="popup-button"
                          onClick={async () => {
                            // Update notes
                            await handleNotes(game.id);
                            // Close notes popup
                            close();
                          }}
                        >
                          Save
                        </button>
                      </div>
                    )}
                  </Popup>
                  {game.hours} hours &nbsp;
                  <br />
                  <div className="bottom-row">
                    <span
                      className={game.playing ? "playing-yes" : "playing-no"}
                    >
                      {game.playing ? `✔` : `❌`}
                    </span>
                    <span>
                      {game.playing
                        ? " Currently Playing"
                        : " Not Currently Playing"}
                    </span>

                    {/* Delete icon */}
                    <img
                      className="trash-can"
                      src={trash_icon}
                      alt="Password"
                      onClick={() => handleRemoveGame(game.id)}
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
