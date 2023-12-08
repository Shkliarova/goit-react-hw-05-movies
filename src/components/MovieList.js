export const MovieList = ({movies}) => {
    return(
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <h2>{movie.title}</h2>
                </li>
            ))}
        </ul>
    )
}