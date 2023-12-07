import { getTrendingMovies } from "api"
import { useEffect, useState } from "react"

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [isError, setError] = useState(false);

    useEffect(() => {
        const fetchMovies = async() => {
            try {
                const response = await getTrendingMovies();
                setMovies(response.result ?? []);
            } catch (error) {
                setError(true);
            }
        }
        fetchMovies();
    }, [])
    return (
        <div>
            {movies.length > 0 && (
            <div>
                <h1>Trending today</h1>
            </div>
        )}
            {isError && <b>Error! Try again...</b>}
        </div>
    )
}