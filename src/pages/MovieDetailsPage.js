import { getMovieById } from "api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense } from "react";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState('');
    const location = useLocation();
    const {movieId} = useParams();

    const backLink = location.state?.from ?? '/movies';

    useEffect(() => {
        const fetchMovie = async() => {
            try {
                const data = await getMovieById(movieId);
                setMovie(data);
            } catch (error) {
                toast.error('Something went wrong')
            }
        }
        fetchMovie();
    }, [movieId])

    return (
        <div>
            <Link to={backLink}>Go back!</Link>
            <div>
                <img src={`${movie.poster_path ?
                        'https://image.tmdb.org/t/p/w500/'+ movie.poster_path : 
                        'https://via.placeholder.com/182x273?text=' + movie.original_title}`}
                        alt={movie.original_title}/>
                <div>
                    <h2>{movie.original_title}</h2>
                    <h4>Rating: {Math.round(movie.vote_average)}</h4>
                    <h4>Overview</h4>
                    <p>{movie.overview}</p>
                    <h4>Genres</h4>
                    <ul>{movie.genres?.map(genre => (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    ))}</ul>
                </div>
            </div>
                <div>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast" state={location.state}>Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" state={location.state}>Reviews</Link>
                    </li>
                </ul>
                <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
                </Suspense>
            </div>
            <Toaster/>
        </div>
    )
}