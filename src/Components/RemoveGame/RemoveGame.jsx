import axios from "axios";
import './RemoveGame.css';
import trash_icon from "../../Assets/images/trash.png";

function RemoveGame({ game, setGames }) {

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

  return (
    <>
      {/* Delete icon */}
      <img
        className="trash-can"
        src={trash_icon}
        alt="Remove"
        onClick={() => handleRemoveGame(game.id)}
      />
    </>
  );
}

export default RemoveGame;
