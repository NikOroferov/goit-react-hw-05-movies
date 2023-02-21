import css from './MoviesPage.module.css';
import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { movieAPI } from '../../services/fetch-api';
import Searchbar from 'components/Searchbar/Searchbar';
import STATUS from '../../services/function-status.json';
import MoviesList from 'components/MoviesList/MoviesList';
import MovieItem from 'components/MoviesList/MovieItem';
import Container from 'components/Container/Container';

export default function Movies() {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

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

    movieAPI
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
    <Container>
      <section className={css['search--movie']}>
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
    </Container>
  );
}
