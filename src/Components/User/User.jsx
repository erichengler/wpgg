import axios from "axios";
import "./User.css";
import { useEffect, useState } from "react";

const User = () => {
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    hours: 0,
    notes: "",
    playing: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to add game to database goes here

    // Reset form data
    setFormData({
      title: "",
      hours: 0,
      notes: "",
      playing: false,
    });
  };

  // useEffect(() => {
  //   const apiKey = process.env.STEAM_API_KEY;
  //   const steamId = "76561197969504268";

  //   axios
  //     .get(
  //       `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${apiKey}&steamid=${steamId}&format=json`
  //     )
  //     .then((response) => {
  //       setGames(response.data.response.games);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching Steam user data:", error);
  //     });
  // }, []);

  return (
    <>
      <div className="new-game-container">
        <h2 className="form-header">Add New Game:</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="new-game-input">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Game Title"
              className="inputField"
              required
            />
          </div>
          <br />

          <div className="new-game-input">
            <input
              type="number"
              name="hoursPlayed"
              value={formData.hours}
              onChange={handleChange}
              placeholder="Hours Played"
              className="inputField"
            />
          </div>
          <br />

          <div>
            <textarea
              className="notes-input"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Add personal notes, a review, or anything else you feel like saying about the game!"
            />
          </div>

          <div className="playing">
            Currently Playing
            <input
              type="checkbox"
              name="currentlyPlaying"
              checked={formData.currentlyPlaying}
              onChange={handleChange}
            />
          </div>
          <br />

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <br />
      <br />

      <div>
        <h2>Games Owned:</h2>
        <ul>
          {games.map((game) => (
            <li key={game.appid}>{game.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default User;
