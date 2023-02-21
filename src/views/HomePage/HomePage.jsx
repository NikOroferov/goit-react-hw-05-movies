import css from './HomePage.module.css';
import Loader from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { movieAPI } from '../../services/fetch-api';
import STATUS from '../../services/function-status.json';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieItem from 'components/MoviesList/MovieItem';
import Container from 'components/Container/Container';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);

    movieAPI
      .fetchTrendingMovies()
      .then(responce => {
        setMovies(responce.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
      });
  }, []);

  return (
    <Container>
      {status === STATUS.PENDING && (
        <Loader
          type="ThreeDots"
          color="#b41408"
          height={80}
          width={80}
        />
      )}
      {status === STATUS.REJECTED && <h2>Something went wrong</h2>}
      {status === STATUS.RESOLVED && (
        <section className={css.homepage}>
          <h1 className={css.homepage__title}>Trending movies</h1>
          {movies && (
            <MoviesList>
              {movies.map(movie => (
                <MovieItem
                  key={movie.id}
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.original_title}
                />
              ))}
            </MoviesList>
          )}
        </section>
      )}
    </Container>
  );
}
