import "./GameItem.css";

import RemoveGame from "../RemoveGame/RemoveGame";
import NotesPopup from "../NotesPopup/NotesPopup";
import CurrentlyPlaying from "../CurrentlyPlaying/CurrentlyPlaying";

function GameItem({ game, setGames, fetchGames }) {

  return (
    <div key={game.id} className="item-container">
      <div className="title">
        <span className="game-title">{game.title}</span>
      </div>

      <ul className="games-list">
        <li>
          <NotesPopup
            fetchGames={fetchGames}
            game={game}
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
  );
}

export default GameItem;
