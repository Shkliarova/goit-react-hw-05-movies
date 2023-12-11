import { Routes, Route } from "react-router-dom"
import { AppLayout } from "./AppLayout/AppLayout"
import { GlobalStyle } from "./GlobalStyled"
import { lazy } from "react"

const HomePage = lazy(() => import('../pages/Home/HomePage'));
const MoviePage = lazy(() => import('../pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetails/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <AppLayout/> }>
        <Route index element={ <HomePage/> } />
        <Route path="movies" element={ <MoviePage/> } />
        <Route path="movies/:movieId" element={ <MovieDetailsPage/> }>
          <Route path="cast" element={ <Cast/> } />
          <Route path="reviews" element={ <Reviews/> } />
        </Route>
      </Route>
      <Route path="*" element={ <NotFoundPage/> } />
    </Routes>
    <GlobalStyle/>
    </div>
  )
}