import css from './Review.module.css';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
// import * as movieApi from '../../services/fetch-api';
import { movieAPI } from 'services/fetch-api';
import STATUS from '../../services/function-status.json';

export default function Review({ movieId }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieAPI
      .fetchMovieReview(movieId)
      .then(response => {
        console.log(response);
        setReviews(response.results);
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
        <ul>
          {reviews.length > 0 ? (
            reviews.map(
              review =>
                (
                  <li key={review.id} className={css.listItem}>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`}
                      alt=""
                    />
                    <h4 className={css.titleReviews}>
                      {review.author}
                    </h4>
                    <p>{review.content}</p>
                  </li>
                ) ?? <p>Reviews not found</p>,
            )
          ) : (
            <div>We don't have any reviews for this movie</div>
          )}
        </ul>
      )}
    </>
  );
}
