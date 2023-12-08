export const MovieList = ({movies}) => {
    return(
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='poster'/>
                    <h2>{movie.title}</h2>
                </li>
            ))}
        </ul>
    )
}