import css from './ActorCard.module.css';

export default function ActorCard({ profile, name, character }) {
  return (
    <li className={css['actor--card__item']}>
      <img
        src={
          profile
            ? `https://image.tmdb.org/t/p/w500${profile}`
            : 'http://dummyimage.com/133x200/99cccc.jpg&text=No+photo'
        }
        alt={name}
        height="200px"
        className={css['actor--card__item--photo']}
      />
      <div className={css['actor--card__item--description']}>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
}
