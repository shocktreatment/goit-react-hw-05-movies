import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Navbar } from './modules/Navbar/Navbar';
const Cast = lazy(() => import('./modules/MovieDetails/Cast'));
const Reviews = lazy(() => import('./modules/MovieDetails/Reviews'));
const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<p>. . . l o a d i n g</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export { App };