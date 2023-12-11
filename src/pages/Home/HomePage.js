import { getTrendingMovies } from "api"
import { MovieList } from "components/MovieList/MovieList";
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast";
import { Title } from "./Home.styled";

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
                <Title>Trending today</Title>
                <MovieList movies={movies}/>
                <Toaster/>
            </div>
        )
}