import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
	return (
		<nav>
			<NavLink
				to="/"
				className={css.link}
				activeClassName={css.activeLink}
				exact>
				Главная
			</NavLink>

			<NavLink
				to="/movies"
				className={css.link}
				activeClassName={css.activeLink}>
				Фильмы
			</NavLink>
		</nav>
	);
}
