import axios from "axios";
import "./User.css";
import { useEffect, useState } from "react";

const User = () => {
  const [games, setGames] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    hours: "",
    notes: "",
    currentlyPlaying: false,
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
      currentlyPlaying: false,
    });
  };

  return (
    <>
      <h1>
        <i>WPGG</i>
      </h1>
      <div className="new-game-container">
        <h2 className="new-game-header">Add New Game</h2>
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
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              placeholder="Hours Played"
              className="inputField"
              min="0"
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

          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
    </>
  );
};

export default User;
