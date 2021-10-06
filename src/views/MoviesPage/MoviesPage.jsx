import css from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as movieApi from '../../services/fetch-api';
import Searchbar from 'components/Searchbar/Searchbar';
import STATUS from '../../services/function-status.json';

export default function Movies() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  console.log(history);
  console.log(location);
  console.log(query);

  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  const onFormSubmit = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    setStatus(STATUS.PENDING);
    movieApi
      .fetchMoviesByQuery(query)
      .then(response => {
        if (response.total_results === 0) {
          setStatus(STATUS.REJECTED);
          return;
        }
        setMovies(response.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
      });
  }, [location.search, query]);

  return (
    <>
      <Searchbar onSubmit={onFormSubmit} />

      {status === STATUS.PENDING && (
        <Loader
          type="ThreeDots"
          color="#b41408"
          height={80}
          width={80}
        />
      )}
      {status === STATUS.REJECTED && (
        <h2>Movies is not found. Try again</h2>
      )}
      {status === STATUS.RESOLVED && (
        <ul className={css.list}>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                className={css.item}
                activeClassName={css.activeItem}
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: location },
                }}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
