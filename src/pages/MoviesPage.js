import { getMovieByQuery } from "api";
import { SearchBar } from "components/SearchBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { MovieList } from "components/MovieList";

export default function MoviePage() {

    const [movies, setMovies] = useState([]);
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = params.get('query');
        if(!currentQuery){
            return;
        }

        const fetchMovies = async() => {
            try {
                const movies = await getMovieByQuery(currentQuery);
                if(movies.length === 0){
                    setMovies([]);
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