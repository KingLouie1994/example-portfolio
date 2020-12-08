// Import React Hooks
import { useState, useEffect } from "react";

// Imports from Router
import { useHistory } from "react-router-dom";

// Import Movie Data
import { MovieState } from "../movieState";

// Import Styles
import styled from "styled-components";

// Import Components
import Award from "../components/Award";

// Import Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

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
        <Details
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie2" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

// Styled Components
const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1300) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
