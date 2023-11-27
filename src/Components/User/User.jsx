import axios from "axios";
import "./User.css";
import { useEffect, useState } from "react";

const User = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    // ! UNSECURE - ADD .ENV FILE BEFORE PUBLISHING
    const apiKey = process.env.STEAM_API_KEY;
    const steamId = "76561197969504268";

    axios
      .get(
        `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId}&format=json`
      )
      .then((response) => {
        setGames(response.data.response.games);
      })
      .catch((error) => {
        console.log("Error fetching Steam user data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Games Owned:</h2>
      <ul>
        {games.map((game) => (
          <li key={game.appid}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
