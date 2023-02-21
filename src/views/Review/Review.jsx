import css from './Review.module.css';
import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { movieAPI } from 'services/fetch-api';
import STATUS from '../../services/function-status.json';
import ReviewerCard from 'components/ReviewerCard/ReviewerCard';

export default function Review({ movieId }) {
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    setStatus(STATUS.PENDING);
    movieAPI
      .fetchMovieReview(movieId)
      .then(response => {
        console.log(response.results);
        setReviews(response.results);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setStatus(STATUS.REJECTED);
      });
  }, [movieId]);

  return (
    <div>
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
        <ul className={css.review__list}>
          {reviews.length > 0 ? (
            reviews.map(
              review =>
                (
                  <ReviewerCard
                    key={review.id}
                    created={review.created_at}
                    review={review.content}
                    author={review.author}
                  />
                ) ?? <p>Reviews not found</p>,
            )
          ) : (
            <div>We don't have any reviews for this movie</div>
          )}
        </ul>
      )}
    </div>
  );
}
