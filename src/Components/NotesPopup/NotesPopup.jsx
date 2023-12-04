import axios from "axios";
import Popup from "reactjs-popup";
import './NotesPopup.css';
import { useState } from "react";

function NotesPopup({ fetchGames, game }) {
  const [newNotes, setNewNotes] = useState("");

  const handleNotes = async (gameId) => {
    try {
      await axios.put(`/games/${gameId}`, { id: gameId, notes: newNotes });
    } catch (error) {
      console.log("Error updating notes:", error);
    }
    fetchGames();
  };

  return (
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
  );
}

export default NotesPopup;
