import { getMovieByQuery } from "api";
import { SearchBar } from "components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { MovieList } from "components/MovieList/MovieList";

export default function MoviePage() {

    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = params.get('query');
        if(!currentQuery){
            setMovies([]);
            return;
        }

        const fetchMovies = async() => {
            try {
                const movies = await getMovieByQuery(currentQuery);
                setMovies(movies ?? []);
                if(movies.length === 0){
                    return toast.error('Not found');
                }
                setMovies(movies)
            } catch (error) {
                toast.error('Something went wrong')
            }
        }
        fetchMovies();
    }, [params])

    return (
        <div>
            <SearchBar setSearchParams={setParams}/>
            {movies.length > 0 && <MovieList movies={movies}/>} 
            <Toaster/>
        </div>
    )
}