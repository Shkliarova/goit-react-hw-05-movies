import { getTrendingMovies } from "api"
import { MovieList } from "components/MovieList";
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const response = await getTrendingMovies();
                setMovies(response.result ?? []);
            } catch (error) {
                toast.error('Error!')
            }
        }
        fetchMovies();
    }, [])
    return (
        <div>
            {movies.length > 0 && (
            <div>
                <h1>Trending today</h1>
                <MovieList movies={movies}/>
            </div>
        )}
            <Toaster/>
        </div>
    )
}