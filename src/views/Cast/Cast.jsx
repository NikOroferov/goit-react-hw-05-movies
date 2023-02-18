import css from './Cast.module.css';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
// import * as movieApi from '../../services/fetch-api';
import { movieAPI } from '../../services/fetch-api';
import STATUS from '../../services/function-status.json';
import ActorCard from 'components/ActorCard/ActorCard';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieAPI
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
              <ActorCard
                id={actor.id}
                profile={actor.profile_path}
                name={actor.name}
                character={actor.character}
              />
            ))
          ) : (
            <div>We don't have any actor for this movie</div>
          )}
        </ul>
      )}
    </>
  );
}
