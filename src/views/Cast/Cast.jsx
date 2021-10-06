import css from './Cast.module.css';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import * as movieApi from '../../services/fetch-api';
import STATUS from '../../services/function-status.json';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieApi
      .fetchCastingInfo(movieId)
      .then(response => {
        setCast(response.cast);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

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
      {status === STATUS.REJECTED && <h2>Что-то пошло не так</h2>}
      {status === STATUS.RESOLVED && (
        <ul className={css.castList}>
          {cast.length > 0 ? (
            cast.map(actor => (
              <li key={actor.id} className={css.castItem}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    height="200px"
                  />
                ) : (
                  <img
                    src="http://dummyimage.com/133x200/99cccc.jpg&text=No+photo"
                    alt={actor.name}
                    height="200px"
                  />
                )}
                <div className={css.description}>
                  <h3>{actor.name}</h3>
                  <p>Character: {actor.character}</p>
                </div>
              </li>
            ))
          ) : (
            <div>We don't have any actor for this movie</div>
          )}
        </ul>
      )}
    </>
  );
}
