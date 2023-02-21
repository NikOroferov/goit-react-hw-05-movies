import css from './Movies.module.css';
import { Link } from 'react-router-dom';

export default function MovieItem({ id, poster, title }) {
  return (
    <li className={css.movie__item}>
      <Link className={css.link} to={`/movies/${id}`}>
        <div className={css['movie__item--poster__thumb']}>
          <img
            className={css['movie__item--poster']}
            src={
              poster
                ? `https://image.tmdb.org/t/p/w500${poster}`
                : 'http://dummyimage.com/200x300/99cccc.jpg&text=No+photo'
            }
            alt={title}
          />
        </div>
        <p>{title}</p>
      </Link>
    </li>
  );
}
