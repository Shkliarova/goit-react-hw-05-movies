import { Routes, Route } from "react-router-dom"
import HomePage from "pages/HomePage"
import MoviePage from "pages/MoviesPage"
import MovieDetailsPage from "pages/MovieDetailsPage"
import NotFoundPage from "pages/NotFoundPage"
import { AppLayout } from "./AppLayout"
import { Cast } from "./Cast"
import { Reviews } from "./Reviews"

export const App = () => {
  return (
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
  )
}