import css from './HomePage.module.css';
import Loader from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { movieAPI } from '../../services/fetch-api';
import STATUS from '../../services/function-status.json';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieItem from 'components/MoviesList/MovieItem';

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
    <>
      {status === STATUS.PENDING && (
        <Loader
          type="ThreeDots"
          color="#b41408"
          height={80}
          width={80}
        />
      )}
      {status === STATUS.REJECTED && <h2>Something went wrong :С</h2>}
      {status === STATUS.RESOLVED && (
        <div className={css.main}>
          <h2>Trending today</h2>
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
          {/* <ul className={css.tranding__list}>
            {movies &&
              movies.map(movie => (
                <li key={movie.id} className={css.tranding__item}>
                  <Link
                    className={css.link}
                    to={`/movies/${movie.id}`}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.original_title}
                    />
                    <p>{movie.original_title}</p>
                  </Link>
                </li>
              ))}
          </ul> */}
        </div>
      )}
    </>
  );
}
