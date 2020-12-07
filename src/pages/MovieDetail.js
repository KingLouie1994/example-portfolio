// Import React Hooks
import { useState, useEffect } from "react";

// Imports from Router
import { useHistory } from "react-router-dom";

// Import Movie Data
import { MovieState } from "../movieState";

// Import Styles
import styled from "styled-components";

const MovieDetail = () => {
  // Use History
  const history = useHistory();
  const url = history.location.pathname;

  // Use State
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // Use Effect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
        </Details>
      )}
    </>
  );
};

// Styled Components
const Details = styled.div``;

const HeadLine = styled.div``;

export default MovieDetail;
