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
                setMovies(response ?? []);
            } catch (error) {
                toast.error('Error!')
            }
        }
        fetchMovies();
    }, [])
    return (
            <div>
                <h1>Trending today</h1>
                <MovieList movies={movies}/>
                <Toaster/>
            </div>
        )
}