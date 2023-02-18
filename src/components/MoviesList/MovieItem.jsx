import css from './Movies.module.css';
import { Link } from 'react-router-dom';

export default function MovieItem({ id, poster, title }) {
  return (
    <li key={id} className={css.movie__item}>
      <Link className={css.link} to={`/movies/${id}`}>
        <div className={css['movie__item--poster__thumb']}>
          {poster ? (
            <img
              className={css['movie__item--poster']}
              src={`https://image.tmdb.org/t/p/w500${poster}`}
              alt={title}
            />
          ) : (
            <img
              className={css['movie__item--poster']}
              src="http://dummyimage.com/200x300/99cccc.jpg&text=No+photo"
              alt={title}
            />
          )}
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
}
