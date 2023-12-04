import "./GameItem.css";

import RemoveGame from "../RemoveGame/RemoveGame";
import NotesPopup from "../NotesPopup/NotesPopup";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";

function GameItem({ game, setGames, fetchGames }) {

  return (
    <div key={game.id} className="item-container">
      {/* ------- Game Header ------- */}
      <span className="game-title">{game.title}</span>

      <ul className="games-list">
        <li>
          {/* ------- Notes component ------- */}
          <NotesPopup
            fetchGames={fetchGames}
            game={game}
          />
          {/* ------- Hours played ------- */}
          {game.hours} hours &nbsp;
          <br />

          <div className="bottom-row">
            {/* ------- Playing component ------- */}
            <CurrentlyPlaying 
                game={game} 
                fetchGames={fetchGames} 
            />
            {/* ------- Remove component ------- */}
            <RemoveGame 
                game={game} 
                setGames={setGames} 
            />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default GameItem;
