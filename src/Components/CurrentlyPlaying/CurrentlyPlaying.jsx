import axios from "axios";
import "./CurrentlyPlaying.css"

function CurrentlyPlaying({ fetchGames, game }) {
  
  // ------- Handle currently playing change -------
  const handlePlaying = async (gameId, bool) => {
    let changeTo;

    // ------- Change logic -------
    if (bool === "true") {
      changeTo = "false";
    } else {
      changeTo = "true";
    }

    // ------- Put request to change currently playing -------
    try {
      await axios.put(`/playing/${gameId}`, { id: gameId, newBool: changeTo });
    } catch (error) {
      console.log("Error updating currently playing:", error);
    }
    fetchGames();
  };

  return (
    <>
      {/* ------- Currently playing icon ------- */}
      <span
        className={game.playing ? "playing-yes" : "playing-no"}
        onClick={() => handlePlaying(game.id, game.playing ? "true" : "false")}
      >
        {game.playing ? `✔` : `❌`}
      </span>

      {/* ------- Currently playing text ------- */}
      <span>
        {game.playing ? " Currently Playing" : " Not Currently Playing"}
      </span>
    </>
  );
}

export default CurrentlyPlaying;
