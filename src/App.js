import React, { useState } from "react";
import "./App.css";

import {
  addWatchedMovie,
  add,
  removeWatchedMovie,
  getWatchedMovies,
  getAllMovies,
} from "./index.js";

const Movies = () => {
  return (
    <>
      {getAllMovies().map((movie, index) => (
        <div key={index} className="all">
          <div>
            <img src={movie.image} height="100px" />
          </div>
          <span>
            <a
              className="movie-watched"
              href="#"
              onClick={function () {
                addWatchedMovie(movie.title, movie.comment, movie.image);
              }}
            >
              {movie.title}
            </a>
          </span>
          <br />
          <span>{movie.comment}</span>
          <br />
          <br />
        </div>
      ))}
    </>
  );
};

function WatchedMovies() {
  return (
    <>
      {getWatchedMovies().map((movie, index) => (
        <div key={index} className="watched">
          <div>
            <img src={movie.image} height="100px" />
          </div>
          <span>
            <a
              className="movie-watched"
              href="#"
              onClick={function () {
                removeWatchedMovie(movie.title);
              }}
            >
              {movie.title}
            </a>
          </span>
          <br />
          <span>{movie.comment}</span>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}

function App(props) {
  const [inputs, setInputs] = useState({
    title: "",
    image: "",
    comment: "",
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h1>Reactive Movies!</h1>
      <h1>Add movie!</h1>
      <b>
        TITLE:
        <br />
        <input
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleInputChange}
        />
      </b>
      <br />
      <b>
        IMAGE URL:
        <br />
        <input
          type="text"
          name="image"
          value={inputs.image}
          onChange={handleInputChange}
        />
      </b>
      <br />
      <b>
        COMMENT:
        <br />
        <input
          type="text"
          name="comment"
          value={inputs.comment}
          onChange={handleInputChange}
        />
      </b>
      <br />
      <input
        type="button"
        onClick={function (e) {
          add(title, image, comment);
        }}
        value="ADD MOVIE"
      />

      <h1>Watchlist:</h1>
      <Movies />

      <h1>Already watched:</h1>
      <WatchedMovies />
    </div>
  );
}

var title = "";
var image = "";
var comment = "";

export default App;