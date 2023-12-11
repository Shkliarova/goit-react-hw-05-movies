import { Link, useLocation } from "react-router-dom"
import { ListFilms, ItemFilms } from "components/MovieList/MovieList.styled";

export const MovieList = ({movies}) => {
    const location = useLocation();
    return(
        <ListFilms>
            {movies.map(({id, title}) => (
                <ItemFilms key={id}>
                    <Link state={{from: location}} to={`/movies/${id}`}>
                        <h5>{title}</h5>
                    </Link>
                </ItemFilms>
            ))}
        </ListFilms>
    )
}