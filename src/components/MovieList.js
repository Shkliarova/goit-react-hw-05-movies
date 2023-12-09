import { Link, useLocation } from "react-router-dom"

export const MovieList = ({movies}) => {
    const location = useLocation();
    return(
        <ul>
            {movies.map(({id, title}) => (
                <li key={id}>
                    <Link state={{from: location}} to={`/movies/${id}`}>
                        <h5>{title}</h5>
                    </Link>
                </li>
            ))}
        </ul>
    )
}