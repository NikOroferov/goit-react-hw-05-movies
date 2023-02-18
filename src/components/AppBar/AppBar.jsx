import css from './AppBar.module.css';
import Navigation from 'components/Navigation/Navigation';

export default function AppBar() {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
}
