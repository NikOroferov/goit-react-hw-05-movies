import { useState, useEffect } from 'react';

import Searchbar from 'components/Searchbar/Searchbar';
import * as movieApi from '../../services/fetch-api';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieApi.fetchMoviesByQuery(query).then(response => {
      setMovies(response.results);
      setStatus(STATUS.RESOLVED).catch(error => {
        setStatus(STATUS.REJECTED);
      });
    });
  }, [query]);

  const onSubmit = () => {};

  return <Searchbar onSubmit={0} />;
}
