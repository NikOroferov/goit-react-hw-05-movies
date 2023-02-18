import css from './ActorCard.module.css';

export default function ActorCard({ id, profile, name, character }) {
  return (
    <li key={id} className={css['actor--card']}>
      {profile ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${profile}`}
          alt={name}
          height="200px"
        />
      ) : (
        <img
          src="http://dummyimage.com/133x200/99cccc.jpg&text=No+photo"
          alt={name}
          height="200px"
        />
      )}
      <div className={css.description}>
        <h3>{name}</h3>
        <p>Character: {character}</p>
      </div>
    </li>
  );
}
