import { getCastMovie } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

export const Cast = () => {
    const [actors, setActors] = useState([]);
    const params = useParams();

    useEffect(() => {
        const fetchCast = async() => {
            try {
                const response = await getCastMovie(params.movieId);
                setActors(response.cast);
            } catch (error) {
                toast.error('Cast not found')
            }
        }
        fetchCast();
    }, [params.movieId]);

    return(
        <div>
            {actors.length > 0 ? (<ul>
                {actors.map(actor => (
                    <li key={actor.id}>
                        <p>{actor.name}</p>
                        <p>{actor.character}</p>
                    </li>
                ))}
            </ul>) : <Toaster/>}
        </div>
    )
}