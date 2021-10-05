import './App.css';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Home from 'views/HomePage/HomePage';
import Movies from 'views/MoviesPage/MoviesPage';
import MovieDetails from 'views/MovieDetailPage/MovieDetailsPage';

function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/movies" exact>
            <Movies />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>

          <Route>
            <Home />
          </Route>
        </Switch>
      </Container>
    </>
  );
}

export default App;
