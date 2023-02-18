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
import { movieAPI } from '../../services/fetch-api';
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
    movieAPI
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
    <section className={css['movie--details']}>
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
      {status === STATUS.REJECTED && <h2>Something went wrong</h2>}
      {status === STATUS.RESOLVED && (
        <div>
          <div className={css['movie--details__description']}>
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
            <div className={css['movie--details__description--info']}>
              <h2>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p>User score: {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              {movie.genres.length > 0 ? (
                <ul
                  className={
                    css['movie--details__description--info__genres']
                  }
                >
                  {movie.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No genres info</p>
              )}
            </div>
          </div>
          <div className={css['movie--details__more--info']}>
            <h3 className={css['movie--details__more--info__title']}>
              More info
            </h3>
            <NavLink
              className={css['movie--details__more--info__link']}
              activeClassName={
                css['movie--details__more--info__active--link']
              }
              to={{
                pathname: `${url}/cast`,
                state: { from: history?.location?.state?.from },
              }}
            >
              Cast
            </NavLink>

            <NavLink
              className={css['movie--details__more--info__link']}
              activeClassName={
                css['movie--details__more--info__active--link']
              }
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
    </section>
  );
}
