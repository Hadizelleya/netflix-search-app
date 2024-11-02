import { useState } from "react";
import "./App.css";
import MovieFetcher from "./components/movieFetcher";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [movieTitle, setMovieName] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSearchClick = () => {
    setMovieName(inputValue);
  };
  return (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          placeholder="enter a movie name"
          value={inputValue}
          id="movie-name"
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick} id="search-btn">
          Search
        </button>
      </div>
      <div id="result">
        {movieTitle && <MovieFetcher movieName={movieTitle} />}
      </div>
      <div className="footer">
        <p className="rights">
          Copy Rights <span className="copy"> &copy; </span> Hadi Zellaya
        </p>
      </div>
    </div>
  );
}

export default App;
