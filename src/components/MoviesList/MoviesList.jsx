import css from './Movies.module.css';

export default function MoviesList({ children }) {
  return <ul className={css.tranding__list}>{children}</ul>;
}
