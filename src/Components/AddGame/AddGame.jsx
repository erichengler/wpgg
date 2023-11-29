import axios from "axios";
import { useState } from "react";
import "./AddGame.css";


const User = () => {
  const [formData, setFormData] = useState({
    title: "",
    hours: "",
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      if (formData.hours === "") {
        formData.hours = 0;
      }
      console.log(formData);
      await axios.post('/games', formData);

      // Reset form data
      setFormData({
        title: "",
        hours: "",
        notes: "",
        playing: false,
      });

      // const response = await axios.get('/games');
      // setGames(response.data);

    } catch (error) {
      console.log('Error adding game:', error);
    }
  };

  return (
    <>
      <div className="new-game-container">
        <h2 className="new-game-header">Add Game</h2>
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
            <span>Currently Playing </span>
            <input
              type="checkbox"
              name="playing"
              checked={formData.playing}
              onChange={handleChange}
            />
          </div>
          <br />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default User;
