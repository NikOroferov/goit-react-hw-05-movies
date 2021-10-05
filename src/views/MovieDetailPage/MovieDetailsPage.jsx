import css from './MovieDetailsPage.module.css';
import { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import * as movieApi from '../../services/fetch-api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieApi
      .fetchFullMovieInfo(movieId)
      .then(responce => {
        setMovie(responce);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => setStatus(STATUS.REJECTED));
  }, [movieId]);

  return (
    <>
      {status === STATUS.PENDING && <h2>Ждём загрузку</h2>}
      {status === STATUS.REJECTED && <h2>Что-то пошло не так</h2>}
      {status === STATUS.RESOLVED && (
        <div>
          <div className={css.movieInfo}>
            {movie.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                height="300px"
              />
            ) : (
              <img
                src="http://dummyimage.com/200x300/99cccc.jpg&text=No+photo"
                alt={movie.title}
              />
            )}
            <div>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres.length > 0 ? (
                <ul>
                  {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              ) : (
                <p>Нет информации о жанрах</p>
              )}
            </div>
          </div>
          <div>
            <h3>Дополнительная информация</h3>
            {/* <NavLink
              className={css.addInfo}
              activeClassName={css.addInfoActive}
              to="/movies/"
            >
              Актёры
            </NavLink>
            <NavLink
              className={css.addInfo}
              activeClassName={css.addInfoActive}
            >
              Отзывы
            </NavLink> */}
          </div>
        </div>
      )}
    </>
  );
}
