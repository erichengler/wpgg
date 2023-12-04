import axios from "axios";
import Popup from "reactjs-popup";
import './NotesPopup.css';
import { useState } from "react";

function NotesPopup({ fetchGames, game }) {
  // ------- State for storing notes -------
  const [newNotes, setNewNotes] = useState("");

  // ------- Handle update notes -------
  const handleNotes = async (gameId) => {

    // ------- Put request to update notes of game with specific id -------
    try {
      await axios.put(`/games/${gameId}`, { id: gameId, notes: newNotes });
    } catch (error) {
      console.log("Error updating notes:", error);
    }
    fetchGames();
  };

  return (
    // ------- Notes Popup -------
    <Popup
      trigger={<button className="notes-button">Notes</button>}
      position="center"
    >
      {(close) => (
        <div className="popup-div">

          {/* ------- Notes text area ------- */}
          <textarea
            className="popup-text"
            defaultValue={game.notes}
            onChange={(e) => setNewNotes(e.target.value)}
          ></textarea>

          {/* ------- Save notes button ------- */}
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
