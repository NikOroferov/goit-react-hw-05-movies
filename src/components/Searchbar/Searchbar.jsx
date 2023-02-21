import css from './Searchbar.module.css';
import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim === '') {
      alert('Input search query');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.searchform}>
      <input
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="query"
        value={query}
        onChange={handleChange}
      />

      <button type="submit" className={css.button}>
        <span className={css.label}></span>
      </button>
    </form>
  );
}
