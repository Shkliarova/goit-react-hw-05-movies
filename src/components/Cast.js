import { getCastMovie } from "api";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";

export const Cast = () => {
    const [actors, setActors] = useState([]);
    const {movieId} = useParams();

    useEffect(() => {
        const fetchCast = async() => {
            try {
                const response = await getCastMovie(movieId);
                setActors(response);
            } catch (error) {
                toast.error('Cast not found')
            }
        }
        fetchCast();
    }, [movieId]);

    return(
        <div>
            <ul>
                {actors.map(({id, profile_path, original_name, character}) => (
                    <li key={id}>
                        <img src={`${profile_path ?
                        'https://image.tmdb.org/t/p/w500/'+ profile_path : 
                        'https://via.placeholder.com/182x273?text=' + original_name}`}
                        alt={original_name}/>
                        <p>Actor: {original_name}</p>
                        <p>Character: {character}</p>
                    </li>
                ))}
            </ul>
            <Toaster/>
        </div>
    )
}