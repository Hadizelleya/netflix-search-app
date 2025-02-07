import "./movie.css";
function Movie({
  Poster,
  Title,
  imdbRating,
  Rated,
  Year,
  Runtime,
  Genre,
  Plot,
  Actors,
}) {
  return (
    <>
      <div className="info">
        <img alt="poster" src={Poster} className="poster" />
        <div>
          <h2>{Title}</h2>
          <div className="rating">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <defs></defs>
              <path
                class="cls-1"
                d="M381.2,150.3l143.7,21.2a32,32,0,0,1,17.8,54.4L438.5,328.1l24.6,146.6a32,32,0,0,1-46.6,33.6L288.1,439.8,159.8,508.3A32.22,32.22,0,0,1,126,506a31.84,31.84,0,0,1-12.8-31.3l24.6-146.6L33.58,225.9a32.15,32.15,0,0,1-7.89-32.8,31.81,31.81,0,0,1,25.73-21.6L195,150.3,259.4,18a32,32,0,0,1,57.5,0Z"
              />
            </svg>
            <h4>{imdbRating}</h4>
          </div>
          <div className="details">
            <span>{Rated}</span>
            <span>{Year}</span>
            <span>{Runtime}</span>
          </div>
          <div className="genre">
            <div>{Genre}</div>
          </div>
        </div>
      </div>
      <h3>Plot:</h3>
      <p>{Plot}</p>
      <h3>Cast:</h3>
      <p>{Actors}</p>
    </>
  );
}

export default Movie;
