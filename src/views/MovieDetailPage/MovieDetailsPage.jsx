import css from './MovieDetailsPage.module.css';
import Loader from 'react-loader-spinner';
import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  NavLink,
  useRouteMatch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import * as movieApi from '../../services/fetch-api';
import STATUS from '../../services/function-status.json';

const Cast = lazy(() =>
  import('../Cast/Cast' /* webpackChunkName: "cast" */),
);

const Review = lazy(() =>
  import('../Review/Review' /* webpackChunkName: "review" */),
);

export default function MovieDetails() {
  const { url } = useRouteMatch();
  const { movieId } = useParams();

  const history = useHistory();
  const location = useLocation();

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

  const onComeBack = () => {
    history.push(location?.state?.from ?? '/');
  };

  return (
    <>
      <button
        type="button"
        onClick={onComeBack}
        className={css.button}
      >
        Come back
      </button>
      {status === STATUS.PENDING && (
        <Loader
          type="ThreeDots"
          color="#b41408"
          height={80}
          width={80}
        />
      )}
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
            <NavLink
              className={css.info}
              activeClassName={css.infoActive}
              to={{
                pathname: `${url}/cast`,
                state: { from: history?.location?.state?.from },
              }}
            >
              Cast
            </NavLink>

            <NavLink
              className={css.info}
              activeClassName={css.infoActive}
              to={{
                pathname: `${url}/reviews`,
                state: { from: history?.location?.state?.from },
              }}
            >
              Reviews
            </NavLink>
          </div>
        </div>
      )}

      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#b41408"
            height={80}
            width={80}
          />
        }
      >
        <Route path="/movies/:movieId/cast">
          {<Cast movieId={movieId} />}
        </Route>

        <Route path="/movies/:movieId/reviews">
          {<Review movieId={movieId} />}
        </Route>
      </Suspense>
    </>
  );
}
