import { useEffect, useState } from "react";
import axios from "axios";
import "./GamesList.css";

function GamesList() {
  const [games, setGames] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('hours');
  const [sortOrder, setSortOrder] = useState('desc');

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

  const handleSortBy = (criteria) => () => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    
    } else {
      setSortCriteria(criteria);
      setSortOrder('asc');
    }
  };

  const sortedGames = games.sort((a, b) => {
    // Sort based on criteria and order
    if (sortCriteria === 'name') {
      return sortOrder === 'desc' 
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title);

    } else if (sortCriteria === 'hours') {
      return sortOrder === 'asc'
        ? a.hours - b.hours
        : b.hours - a.hours;

    } else if (sortCriteria === 'playing') {
      return sortOrder === 'asc' 
        ? a.playing - b.playing
        : b.playing - a.playing
    }
    // Default, no sorting
    return;
  })

  return (
    <div className="games-container">
      <h2 className="games-header">Games</h2>

      <div className="filter">
        <span className="filter-by" onClick={handleSortBy('name')}>
          Name {sortCriteria === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
        </span> | &nbsp;

        <span className="filter-by" onClick={handleSortBy('hours')}>
          Hours {sortCriteria === 'hours' && (sortOrder === 'asc' ? '▲' : '▼')}
        </span> | &nbsp;

        <span className="filter-by" onClick={handleSortBy('playing')}>
          Currently Playing {sortCriteria === 'playing' && (sortOrder === 'asc' ? '❌' : '✔' )}
        </span>
      </div>
      
      {games.length === 0
        ? "No Games Found"
        : sortedGames.map((game) => (
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
        ))
      }
    </div>
  );
}

export default GamesList;
