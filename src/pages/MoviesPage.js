import { getMovieByQuery } from "api";
import { SearchBar } from "components/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { MovieList } from "components/MovieList";

export default function MoviePage() {

    const [movies, setMovies] = useState([]);
    const [params] = useSearchParams();

    const query = params.get('query') ?? '';

    useEffect(() => {
        if(query === ''){
            return;
        }

        const fetchMovies = async() => {
            try {
                const movies = await getMovieByQuery(query);
                if(movies.result.length === 0){
                    setMovies([]);
                    return toast.error('Not found');
                }
                setMovies(movies.result)
            } catch (error) {
                toast.error('Something went wrong')
            }
        }
        fetchMovies();
    }, [query])

    return (
        <div>
            <SearchBar query={query}/>
            {movies.length > 0 ? <MovieList/> : <Toaster/>}
        </div>
    )
}