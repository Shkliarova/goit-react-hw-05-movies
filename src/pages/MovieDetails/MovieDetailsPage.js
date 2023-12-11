import { getMovieById } from "api";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense } from "react";
import { BackLink, MovieWrapper, MovieImg, MovieTitle, MovieSubTitle, MovieDescr, ListDescr, StyledList, ListItem, Title } from "./Details.styled";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
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
            <BackLink>
            <Link to={backLink}>Go back!</Link>
            </BackLink>
            {movie && (<MovieWrapper>
                <MovieImg src={`${movie.poster_path ?
                        'https://image.tmdb.org/t/p/w500/'+ movie.poster_path : 
                        'https://via.placeholder.com/182x273?text=' + movie.original_title}`}
                        alt={movie.original_title}/>
                <div>
                    <MovieTitle>{movie.original_title}</MovieTitle>
                    <MovieSubTitle>User score: {Math.round(movie.vote_average)*10}%</MovieSubTitle>
                    <MovieSubTitle>Overview</MovieSubTitle>
                    <MovieDescr>{movie.overview}</MovieDescr>
                    <MovieSubTitle>Genres</MovieSubTitle>
                    <ListDescr>{movie.genres?.map(genre => (
                        <li key={genre.id}>
                            {genre.name}
                        </li>
                    ))}</ListDescr>
                </div>
            </MovieWrapper>
            )}
            
                <div>
                <Title>Additional information</Title>
                <StyledList>
                    <ListItem>
                        <Link to="cast" state={location.state}>Cast</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="reviews" state={location.state}>Reviews</Link>
                    </ListItem>
                </StyledList>
                <Suspense fallback={<div>Loading subpage...</div>}>
                <Outlet />
                </Suspense>
            </div>
            <Toaster/>
        </div>
    )
}