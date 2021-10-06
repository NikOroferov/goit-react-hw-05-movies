import css from './HomePage.module.css';
import Loader from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesApi from '../../services/fetch-api';
import STATUS from '../../services/function-status.json';

export default function Home() {
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);

    moviesApi
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
      {status === STATUS.REJECTED && <h2>Что-то пошло не так :С</h2>}
      {status === STATUS.RESOLVED && (
        <div>
          <h2>Trending today</h2>
          <ul>
            {movies &&
              movies.map(movie => (
                <li key={movie.id}>
                  <Link
                    className={css.link}
                    to={`/movies/${movie.id}`}
                  >
                    {movie.original_title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}
