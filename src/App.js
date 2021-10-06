import './App.css';
import Loader from 'react-loader-spinner';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

const Home = lazy(() =>
  import(
    'views/HomePage/HomePage' /* webpackChunkName: "home-page" */
  ),
);

const Movies = lazy(() =>
  import(
    'views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */
  ),
);

const MovieDetails = lazy(() =>
  import(
    'views/MovieDetailPage/MovieDetailsPage' /* webpackChunkName: "mopie-details-page" */
  ),
);

function App() {
  return (
    <>
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              type="Audio"
              color="#b41408"
              height={80}
              width={80}
            />
          }
        >
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
        </Suspense>
      </Container>
    </>
  );
}

export default App;
