import axios from "axios";
import "./CurrentlyPlaying.css"

function CurrentlyPlaying({ fetchGames, game }) {
  
  const handlePlaying = async (gameId, bool) => {
    let changeTo;

    if (bool === "true") {
      changeTo = "false";
    } else {
      changeTo = "true";
    }

    try {
      await axios.put(`/playing/${gameId}`, { id: gameId, newBool: changeTo });
    } catch (error) {
      console.log("Error updating currently playing:", error);
    }
    fetchGames();
  };

  return (
    <>
      <span
        className={game.playing ? "playing-yes" : "playing-no"}
        onClick={() => handlePlaying(game.id, game.playing ? "true" : "false")}
      >
        {game.playing ? `✔` : `❌`}
      </span>
      <span>
        {game.playing ? " Currently Playing" : " Not Currently Playing"}
      </span>
    </>
  );
}

export default CurrentlyPlaying;
