import { useEffect, useState } from "react";
import axios from "axios";
import "./GamesList.css";

import SortBy from "../../SortBy/SortBy";
import GameItem from "../../GameItem/GameItem";

function GamesList() {
  
  // ------- State for games and sorting criteria -------
  const [games, setGames] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("hours");
  const [sortOrder, setSortOrder] = useState("desc");

  // ------- Get request to fetch games -------
  const fetchGames = async () => {
    try {
      const response = await axios.get("/games");
      setGames(response.data);
    } catch (error) {
      console.log("Error fetching games:", error);
    }
  };

  // ------- Fetch games on page load -------
  useEffect(() => {
    fetchGames();
  }, []);

  // ------- Sort by logic -------
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
    // ------- Default, no sorting -------
    return;
  });

  return (
    <div className="games-container">
      <h2 className="games-header">Games</h2>

      {/* ------- Sort by filter ------- */}
      <SortBy
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* ------- Games list ------- */}
      {games.length === 0
        ? "No Games Found"
        : sortedGames.map((game) => (
          <GameItem 
            key={game.id}
            game={game}
            setGames={setGames}
            fetchGames={fetchGames}
          />
      ))}
    </div>
  );
}

export default GamesList;
